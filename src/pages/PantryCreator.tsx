
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Users, ChefHat, Calendar, Download, Copy, Share, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { pdf } from '@react-pdf/renderer';
import { generateBalancedPantryList, type PantryItem } from '@/data/pantry/products';
import { useNutriStore } from '@/store/useNutriStore';
import { calculatePriceDiff } from '@/lib/nutricore';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PDFViewer } from '@react-pdf/renderer';

// Lazy load del componente PDF para mejor performance
const PantryPDFContent = lazy(() => import('@/components/pantry/PantryPDFDocument'));

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
    const listText = generatedList
      .map(item => `${item.name}: ${item.quantity} ${item.unit} - $${item.price.toFixed(2)}`)
      .join('\n');
    
    navigator.clipboard.writeText(listText);
    toast({ title: "Lista copiada", description: "La lista se copió al portapapeles" });
  };

  const shareList = () => {
    const params = new URLSearchParams({
      size: householdSize.toString(),
      prefs: selectedPreferences.join(','),
      freq: frequency
    });
    
    const url = `${window.location.origin}/despensa?${params.toString()}`;
    navigator.clipboard.writeText(url);
    toast({ title: "Enlace copiado", description: "El enlace se copió al portapapeles" });
  };

  const downloadPDF = async () => {
    try {
      toast({ title: "Generando PDF", description: "Preparando tu lista personalizada..." });
      
      
      const PantryPDF = (await import('@/components/pantry/PantryPDFDocument')).default;
      
      const blob = await pdf(
        <PantryPDF
          items={generatedList}
          householdSize={householdSize}
          frequency={frequency}
          preferences={selectedPreferences}
          totalPrice={totalPrice}
        />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `despensa-vegana-${householdSize}personas-${frequency}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
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
          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
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
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                {frequencies.map(freq => (
                  <Card 
                    key={freq.value}
                    className={`cursor-pointer transition-colors ${
                      frequency === freq.value ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                    }`}
                    onClick={() => setPantryParams(householdSize, freq.value, selectedPreferences)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{freq.label}</h3>
                          <p className="text-sm text-muted-foreground">{freq.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          frequency === freq.value ? 'bg-primary border-primary' : 'border-muted-foreground'
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
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
                    <Button onClick={() => setIsPreviewOpen(true)} variant="outline" size="sm" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Vista Previa
                    </Button>
                    <Button onClick={copyList} variant="outline" size="sm" className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      Copiar
                    </Button>
                    <Button onClick={downloadPDF} variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                    <Button onClick={shareList} variant="outline" size="sm" className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </div>

                <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                  <DialogContent className="max-w-4xl h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>Vista Previa de tu Despensa</DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                      <Suspense fallback={<div className="text-center p-4">Cargando vista previa...</div>}>
                        <PDFViewer width="100%" height="100%" className="border-0">
                          <PantryPDFContent 
                            items={generatedList}
                            householdSize={householdSize}
                            frequency={frequency || 'weekly'}
                            preferences={selectedPreferences}
                            totalPrice={totalPrice}
                          />
                        </PDFViewer>
                      </Suspense>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="space-y-4">
                  {[...new Set(generatedList.map(item => item.category))].map(category => (
                    <Card key={category}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {generatedList
                            .filter(item => item.category === category)
                            .map(item => (
                              <div key={item.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {item.quantity} {item.unit}
                                  </p>
                                </div>
                                <Badge variant="secondary">
                                  ${item.price.toFixed(2)}
                                </Badge>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    Total estimado: <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Para {householdSize} persona{householdSize > 1 ? 's' : ''} • {
                      frequency === 'weekly' ? 'Semanal' : 
                      frequency === 'biweekly' ? 'Quincenal' : 'Mensual'
                    }
                  </p>
                </div>
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