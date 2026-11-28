
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast as notify } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Users, ChefHat, Calendar, Download, Copy, Share, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateBalancedPantryList } from '@/data/pantry/products';
import { useNutriStore } from '@/store/useNutriStore';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { buildPantryExport, formatPantryCopy } from '@/components/pantry/pantry-export';
import { getPantryShoppingInfo, PANTRY_RECIPES_PATH, type PantryShoppingInfo } from '@/data/pantry/shopping';

function ShoppingInfo({ info }: { info: PantryShoppingInfo }) {
  return (
    <div className="space-y-1 text-sm text-muted-foreground">
      {info.description && <p>{info.description}</p>}
      <p>Origen del precio: {info.priceOrigin}.</p>
      <p><strong>Dónde buscar:</strong> {info.where}</p>
      {info.reference && (
        <p>
          <a href={info.reference.url} target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-primary underline-offset-2 break-words rounded-sm focus-visible:ring-2 focus-visible:ring-ring">
            {info.reference.label}
          </a>
          {info.reference.priceBasis ? ' (consulta la oferta del comercio). ' : ' (ficha de producto, no fuente del estimado).'}
        </p>
      )}
      <a href={info.searchUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-foreground underline decoration-primary underline-offset-2 rounded-sm focus-visible:ring-2 focus-visible:ring-ring">
        Buscar {info.name} en CDMX
      </a>
    </div>
  );
}

function GlutenCatalogNotice() {
  return (
    <p className="text-sm text-muted-foreground">
      «Sin gluten» usa etiquetas del catálogo, no verifica productos empacados ni el contacto cruzado. Revisa la etiqueta del producto.
    </p>
  );
}

const PantryCreator: React.FC = () => {
  const { 
    householdSize, 
    preferences: selectedPreferences, 
    frequency, 
    generatedPantry: generatedList,
    setPantryParams,
    setGeneratedPantry,
    resetPantry
  } = useNutriStore();

  const [step, setStep] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [appliedLink, setAppliedLink] = useState<string>();
  const location = useLocation();
  const requiresGlutenExclusion = selectedPreferences.includes('Sin gluten');
  const restrictedListIsEmpty = requiresGlutenExclusion && generatedList.length === 0;
  const { toast } = useToast();

  const preferencesList = [
    'Alto en proteína',
    'Económico',
    'Sin gluten',
    'Orgánico',
    'Fácil preparación',
    'Rica en hierro'
  ];

  const frequencies = [
    { value: 'weekly', label: 'Semanal', description: 'Compras cada semana' },
    { value: 'biweekly', label: 'Quincenal', description: 'Compras cada 15 días' },
    { value: 'monthly', label: 'Mensual', description: 'Compras una vez al mes' }
  ] as const;

  const sharedParams = new URLSearchParams(location.search);
  const [sharedSize] = sharedParams.getAll('size');
  const [sharedPrefs] = sharedParams.getAll('prefs');
  const sharedFrequency = frequencies.find(({ value }) => value === sharedParams.get('freq'))?.value;
  const sharedPreferences = sharedPrefs ? sharedPrefs.split(',') : [];
  const hasSharedConfiguration = ['size', 'prefs', 'freq'].every(key => sharedParams.getAll(key).length === 1)
    && /^[1-6]$/.test(sharedSize ?? '')
    && sharedPreferences.every(pref => preferencesList.includes(pref))
    && new Set(sharedPreferences).size === sharedPreferences.length;

  const handleNext = () => {
    if (step === 3) {
      if (!frequency) {
        toast({ title: "Frecuencia requerida", description: "Selecciona una frecuencia de compra", variant: "destructive" });
        return;
      }
      const list = generateBalancedPantryList(
        householdSize,
        frequency as 'weekly' | 'biweekly' | 'monthly',
        selectedPreferences
      );
      setGeneratedPantry(list);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const copyList = () => {
    const listText = formatPantryCopy(generatedList);
    
    navigator.clipboard.writeText(listText);
    toast({ title: "Lista copiada", description: "La lista se copió al portapapeles" });
  };

  const shareConfiguration = async () => {
    const params = new URLSearchParams({
      size: householdSize.toString(),
      prefs: selectedPreferences.join(','),
      freq: frequency
    });
    
    const url = `${window.location.origin}/despensa?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      notify.success('Enlace copiado', { description: 'Incluye la configuración, no los productos de la lista.' });
    } catch {
      notify.error('No se pudo copiar el enlace', {
        description: 'Puedes copiar la lista o compartir el PDF.',
      });
    }
  };

  const downloadPDF = async () => {
    try {
      toast({ title: "Generando PDF", description: "Preparando tu lista personalizada..." });

      const { createPantryPDFBlob } = await import('@/components/pantry/pantry-pdf');
      const blob = await createPantryPDFBlob(exportModel);

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `despensa-vegana-${householdSize}personas-${frequency}.pdf`;
      document.body.appendChild(link);
      try {
        link.click();
      } finally {
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      }

      toast({ 
        title: "¡PDF generado!", 
        description: "Tu lista de despensa se ha descargado correctamente" 
      });
    } catch (error) {
      console.error('Error generando PDF:', error);
      toast({ 
        title: "Error", 
        description: "No se pudo generar el PDF. Intenta de nuevo.",
        variant: "destructive"
      });
    }
  };

  const totalPrice = generatedList.reduce((sum, item) => sum + item.price, 0);
  const exportModel = buildPantryExport(generatedList, householdSize, frequency, selectedPreferences, totalPrice);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creador de Despensa Vegana
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crea una lista personalizada de compras veganas según el tamaño de tu hogar y preferencias.
          </p>
        </div>

        {step <= 3 && (
          <div className="mb-8">
            <Progress value={(step / 3) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Paso {step} de 3
            </p>
          </div>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <Users className="h-5 w-5" />}
              {step === 2 && <ChefHat className="h-5 w-5" />}
              {step === 3 && <Calendar className="h-5 w-5" />}
              {step === 4 && <Download className="h-5 w-5" />}
              
              {step === 1 && "Tamaño del hogar"}
              {step === 2 && "Preferencias alimentarias"}
              {step === 3 && "Frecuencia de compras"}
              {step === 4 && "Tu despensa personalizada"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "¿Para cuántas personas cocinas regularmente?"}
              {step === 2 && "Selecciona tus preferencias para personalizar la lista"}
              {step === 3 && "¿Con qué frecuencia realizas las compras?"}
              {step === 4 && "Lista generada según tus preferencias"}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            {step === 1 && (
              <div className="space-y-6">
                {hasSharedConfiguration && sharedFrequency && appliedLink !== location.key && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Este enlace comparte el tamaño del hogar, las preferencias y la frecuencia. No contiene una lista de productos.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setPantryParams(Number(sharedSize), sharedFrequency, sharedPreferences);
                        setAppliedLink(location.key);
                      }}
                    >
                      Usar configuración compartida
                    </Button>
                  </div>
                )}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map(size => (
                    <Button
                      key={size}
                      variant={householdSize === size ? "default" : "outline"}
                      className="h-16"
                      onClick={() => setPantryParams(size, frequency, selectedPreferences)}
                    >
                      {size === 6 ? "6+" : size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {preferencesList.map(pref => (
                    <Button
                      key={pref}
                      variant={selectedPreferences.includes(pref) ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => {
                        const newPrefs = selectedPreferences.includes(pref)
                          ? selectedPreferences.filter(p => p !== pref)
                          : [...selectedPreferences, pref];
                        setPantryParams(householdSize, frequency, newPrefs);
                      }}
                    >
                      {pref}
                    </Button>
                  ))}
                </div>
                {requiresGlutenExclusion && <GlutenCatalogNotice />}
              </div>
            )}

            {step === 3 && (
              <fieldset className="min-w-0">
                <legend className="sr-only">Frecuencia de compras</legend>
                <div className="space-y-4">
                  {frequencies.map(freq => (
                    <Card
                      key={freq.value}
                      className={`transition-colors ${
                        frequency === freq.value ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        id={`pantry-frequency-${freq.value}`}
                        name="pantry-frequency"
                        value={freq.value}
                        className="peer sr-only"
                        aria-labelledby={`pantry-frequency-label-${freq.value}`}
                        aria-describedby={`pantry-frequency-description-${freq.value}`}
                        checked={frequency === freq.value}
                        onChange={() => setPantryParams(householdSize, freq.value, selectedPreferences)}
                      />
                      <label
                        htmlFor={`pantry-frequency-${freq.value}`}
                        className="flex cursor-pointer items-center justify-between rounded-lg p-4 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2"
                      >
                        <span>
                          <span id={`pantry-frequency-label-${freq.value}`} className="block font-medium">{freq.label}</span>
                          <span id={`pantry-frequency-description-${freq.value}`} className="block text-sm text-muted-foreground">{freq.description}</span>
                        </span>
                        <span aria-hidden="true" className={`w-4 h-4 rounded-full border-2 ${
                          frequency === freq.value ? 'bg-primary border-primary' : 'border-muted-foreground'
                        }`} />
                      </label>
                    </Card>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 4 && (
              <div className="space-y-6">
                {requiresGlutenExclusion && <GlutenCatalogNotice />}
                {restrictedListIsEmpty && (
                  <p role="status">No hay productos del catálogo que coincidan sin quitar la restricción «Sin gluten».</p>
                )}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <Button 
                    onClick={() => {
                      resetPantry();
                      setStep(1);
                    }}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Nueva lista
                  </Button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full md:w-auto">
                    <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                      <DialogTrigger asChild>
                        <Button disabled={restrictedListIsEmpty} variant="outline" size="sm" className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Vista Previa
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        className="max-w-3xl max-h-[85dvh] grid-rows-[auto_minmax(0,1fr)]"
                        onKeyDownCapture={(event) => {
                          if (event.key === 'Escape' && !event.nativeEvent.isComposing) {
                            // La vista enfocada también cierra si la capa de Radix aún no procesa Escape.
                            event.preventDefault();
                            setIsPreviewOpen(false);
                          }
                        }}
                      >
                        <DialogHeader className="pr-6">
                          <DialogTitle>Vista Previa de tu Despensa</DialogTitle>
                          <DialogDescription>Contenido de la lista que se incluirá en el PDF.</DialogDescription>
                        </DialogHeader>
                        <section aria-label="Contenido de la lista" tabIndex={0} className="min-h-0 space-y-5 overflow-y-auto px-1 pb-1">
                          <header>
                            <h3 className="text-lg font-semibold text-primary">{exportModel.title}</h3>
                            {exportModel.subtitles.map(line => <p key={line}>{line}</p>)}
                            <p className="text-sm text-muted-foreground">{exportModel.metadata}</p>
                          </header>
                          {exportModel.categories.map(({ name, rows }) => (
                            <section key={name}>
                              <h4 className="rounded bg-muted px-2 py-1 font-semibold">{name}</h4>
                              <ul className="divide-y">
                                {rows.map(row => (
                                  <li key={row.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-2 py-2 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
                                    <span className="col-start-1 break-words">{row.name}</span>
                                    <span className="col-start-1 text-sm text-muted-foreground sm:col-start-2 sm:row-start-1">{row.quantity}</span>
                                    <span className="col-start-2 row-start-1 text-right font-semibold text-primary sm:col-start-3">{row.price}</span>
                                    <div className="col-span-full"><ShoppingInfo info={row.shopping} /></div>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ))}
                          <footer className="space-y-2 border-t pt-3">
                            <p className="font-semibold text-primary">{exportModel.total}</p>
                            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                              {exportModel.notes.map(note => <li key={note}>{note}</li>)}
                            </ul>
                            <a href={exportModel.recipesUrl} className="text-foreground underline decoration-primary rounded-sm focus-visible:ring-2 focus-visible:ring-ring">Explorar recetas vegetales (sin filtro de despensa)</a>
                          </footer>
                        </section>
                      </DialogContent>
                    </Dialog>
                    <Button onClick={copyList} disabled={restrictedListIsEmpty} variant="outline" size="sm" className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      Copiar
                    </Button>
                    <Button onClick={downloadPDF} disabled={restrictedListIsEmpty} variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                    <Button onClick={shareConfiguration} aria-label="Compartir configuración" variant="outline" size="sm" className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[...new Set(generatedList.map(item => item.category))].map(category => (
                    <Card key={category}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {generatedList
                            .filter(item => item.category === category)
                            .map(item => {
                              const info = getPantryShoppingInfo(item);
                              return (
                              <div key={item.id} className="min-w-0 space-y-2 p-3 bg-muted/50 rounded-md">
                                <div className="flex justify-between items-start gap-2">
                                  <div className="min-w-0">
                                    <p className="font-medium break-words">{info.name}</p>
                                    <p className="text-sm text-muted-foreground">{item.quantity} {item.unit}</p>
                                  </div>
                                  <Badge variant="secondary" className="shrink-0">${item.price.toFixed(2)}</Badge>
                                </div>
                                <ShoppingInfo info={info} />
                              </div>
                              );
                            })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {!restrictedListIsEmpty && <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    Total estimado: <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Para {householdSize} persona{householdSize > 1 ? 's' : ''} • {
                      frequency === 'weekly' ? 'Semanal' : 
                      frequency === 'biweekly' ? 'Quincenal' : 'Mensual'
                    }
                  </p>
                </div>}
                {!restrictedListIsEmpty && (
                  <div className="space-y-2 rounded-lg border p-4 text-center">
                    <h3 className="font-semibold">¿Qué puedes cocinar?</h3>
                    <p className="text-sm text-muted-foreground">
                      Explora ideas de cocina de origen vegetal a partir del ingrediente principal de tu lista. Revisa los demás ingredientes y las cantidades antes de cocinar.
                    </p>
                    <div className="flex flex-wrap gap-2"><Button asChild><Link to={`${PANTRY_RECIPES_PATH}?despensa=1`}>Recetas según mi despensa</Link></Button><Button asChild variant="outline"><Link to={PANTRY_RECIPES_PATH}>Explorar recetas vegetales</Link></Button></div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {step < 4 && (
          <div className="flex justify-center gap-4">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={() => setStep(step - 1)}
              >
                Anterior
              </Button>
            )}
            <Button 
              onClick={handleNext}
              disabled={
                (step === 1 && !householdSize) ||
                (step === 3 && !frequency)
              }
            >
              {step === 3 ? 'Generar lista' : 'Siguiente'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryCreator;
