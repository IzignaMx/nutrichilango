import React, { useReducer, useEffect, lazy, Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Users, ChefHat, Calendar, Download, Copy, Share } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { pdf } from '@react-pdf/renderer';
import { generateBalancedPantryList, type PantryItem } from '@/data/pantry/products';

// Lazy load del componente PDF para mejor performance
const PantryPDFDocument = lazy(() => import('@/components/pantry/PantryPDFDocument'));

type PantryState = {
  step: number;
  householdSize: number;
  preferences: string[];
  frequency: 'weekly' | 'biweekly' | 'monthly' | '';
  generatedList: PantryItem[];
};

// Tipo importado desde el archivo de productos

type PantryAction = 
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_HOUSEHOLD_SIZE'; payload: number }
  | { type: 'TOGGLE_PREFERENCE'; payload: string }
  | { type: 'SET_FREQUENCY'; payload: 'weekly' | 'biweekly' | 'monthly' }
  | { type: 'GENERATE_LIST'; payload: PantryItem[] }
  | { type: 'LOAD_STATE'; payload: Partial<PantryState> };

const initialState: PantryState = {
  step: 1,
  householdSize: 2,
  preferences: [],
  frequency: '',
  generatedList: []
};

const pantryReducer = (state: PantryState, action: PantryAction): PantryState => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SET_HOUSEHOLD_SIZE':
      return { ...state, householdSize: action.payload };
    case 'TOGGLE_PREFERENCE':
      const newPreferences = state.preferences.includes(action.payload)
        ? state.preferences.filter(p => p !== action.payload)
        : [...state.preferences, action.payload];
      return { ...state, preferences: newPreferences };
    case 'SET_FREQUENCY':
      return { ...state, frequency: action.payload };
    case 'GENERATE_LIST':
      return { ...state, generatedList: action.payload };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const PantryCreator: React.FC = () => {
  const [state, dispatch] = useReducer(pantryReducer, initialState);
  const { toast } = useToast();

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pantry-creator-state');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ type: 'LOAD_STATE', payload: parsedState });
      } catch (error) {
        console.error('Error loading saved state:', error);
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('pantry-creator-state', JSON.stringify(state));
  }, [state]);

  const preferences = [
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

  const generatePantryList = (): PantryItem[] => {
    return generateBalancedPantryList(
      state.householdSize,
      state.frequency as 'weekly' | 'biweekly' | 'monthly',
      state.preferences
    );
  };

  const handleNext = () => {
    if (state.step === 3) {
      const list = generatePantryList();
      dispatch({ type: 'GENERATE_LIST', payload: list });
      dispatch({ type: 'SET_STEP', payload: 4 });
    } else {
      dispatch({ type: 'SET_STEP', payload: state.step + 1 });
    }
  };

  const copyList = () => {
    const listText = state.generatedList
      .map(item => `${item.name}: ${item.quantity} ${item.unit} - $${item.price.toFixed(2)}`)
      .join('\n');
    
    navigator.clipboard.writeText(listText);
    toast({ title: "Lista copiada", description: "La lista se copió al portapapeles" });
  };

  const shareList = () => {
    const params = new URLSearchParams({
      size: state.householdSize.toString(),
      prefs: state.preferences.join(','),
      freq: state.frequency
    });
    
    const url = `https://nutrichilango.izignamx.com/despensa?${params.toString()}`;
    navigator.clipboard.writeText(url);
    toast({ title: "Enlace copiado", description: "El enlace se copió al portapapeles" });
  };

  const downloadPDF = async () => {
    try {
      toast({ title: "Generando PDF", description: "Preparando tu lista personalizada..." });
      
      // Importar dinámicamente el componente PDF
      const PantryPDFDocument = (await import('@/components/pantry/PantryPDFDocument')).default;
      
      // Generar el blob del PDF
      const blob = await pdf(
        <PantryPDFDocument
          items={state.generatedList}
          householdSize={state.householdSize}
          frequency={state.frequency}
          preferences={state.preferences}
          totalPrice={totalPrice}
        />
      ).toBlob();

      // Crear enlace de descarga
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `despensa-vegana-${state.householdSize}personas-${state.frequency}.pdf`;
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

  const totalPrice = state.generatedList.reduce((sum, item) => sum + item.price, 0);

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

        {state.step <= 3 && (
          <div className="mb-8">
            <Progress value={(state.step / 3) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Paso {state.step} de 3
            </p>
          </div>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {state.step === 1 && <Users className="h-5 w-5" />}
              {state.step === 2 && <ChefHat className="h-5 w-5" />}
              {state.step === 3 && <Calendar className="h-5 w-5" />}
              {state.step === 4 && <Download className="h-5 w-5" />}
              
              {state.step === 1 && "Tamaño del hogar"}
              {state.step === 2 && "Preferencias alimentarias"}
              {state.step === 3 && "Frecuencia de compras"}
              {state.step === 4 && "Tu despensa personalizada"}
            </CardTitle>
            <CardDescription>
              {state.step === 1 && "¿Para cuántas personas cocinas regularmente?"}
              {state.step === 2 && "Selecciona tus preferencias para personalizar la lista"}
              {state.step === 3 && "¿Con qué frecuencia realizas las compras?"}
              {state.step === 4 && "Lista generada según tus preferencias"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map(size => (
                    <Button
                      key={size}
                      variant={state.householdSize === size ? "default" : "outline"}
                      className="h-16"
                      onClick={() => dispatch({ type: 'SET_HOUSEHOLD_SIZE', payload: size })}
                    >
                      {size === 6 ? "6+" : size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {state.step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {preferences.map(pref => (
                    <Button
                      key={pref}
                      variant={state.preferences.includes(pref) ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => dispatch({ type: 'TOGGLE_PREFERENCE', payload: pref })}
                    >
                      {pref}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {state.step === 3 && (
              <div className="space-y-4">
                {frequencies.map(freq => (
                  <Card 
                    key={freq.value}
                    className={`cursor-pointer transition-colors ${
                      state.frequency === freq.value ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                    }`}
                    onClick={() => dispatch({ type: 'SET_FREQUENCY', payload: freq.value })}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{freq.label}</h3>
                          <p className="text-sm text-muted-foreground">{freq.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          state.frequency === freq.value ? 'bg-primary border-primary' : 'border-muted-foreground'
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {state.step === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Button onClick={copyList} variant="outline" className="flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    Copiar lista
                  </Button>
                  <Button onClick={downloadPDF} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </Button>
                  <Button onClick={shareList} variant="outline" className="flex items-center gap-2">
                    <Share className="h-4 w-4" />
                    Compartir enlace
                  </Button>
                </div>

                <div className="space-y-4">
                  {[...new Set(state.generatedList.map(item => item.category))].map(category => (
                    <Card key={category}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {state.generatedList
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
                    Para {state.householdSize} persona{state.householdSize > 1 ? 's' : ''} • {
                      state.frequency === 'weekly' ? 'Semanal' : 
                      state.frequency === 'biweekly' ? 'Quincenal' : 'Mensual'
                    }
                  </p>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={() => dispatch({ type: 'SET_STEP', payload: 1 })}
                    variant="outline"
                  >
                    Crear nueva lista
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {state.step < 4 && (
          <div className="flex justify-center gap-4">
            {state.step > 1 && (
              <Button 
                variant="outline" 
                onClick={() => dispatch({ type: 'SET_STEP', payload: state.step - 1 })}
              >
                Anterior
              </Button>
            )}
            <Button 
              onClick={handleNext}
              disabled={
                (state.step === 1 && !state.householdSize) ||
                (state.step === 3 && !state.frequency)
              }
            >
              {state.step === 3 ? 'Generar lista' : 'Siguiente'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryCreator;