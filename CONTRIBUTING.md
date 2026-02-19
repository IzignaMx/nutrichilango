# Contribuir a NutriChilango

## 🤝 Cómo Contribuir

### Reporte de Issues

1. Revisa issues existentes antes de crear uno nuevo.
2. Incluye pasos para reproducir el problema.
3. Especifica navegador y versión del OS.

### Pull Requests

1. Fork el repositorio.
2. Crea una rama feature (`git checkout -b feature/amazing-feature`).
3. Commit tus cambios (`git commit -m 'Add amazing feature'`).
4. Push a la rama (`git push origin feature/amazing-feature`).
5. Abre un Pull Request.

### Estándares de Código

- **TypeScript**: Uso estricto de tipos. Consultar [ARCHITECTURE.md](ARCHITECTURE.md).
- **Diseño**: Seguir los tokens y principios de [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).
- **IA**: Los cambios realizados por agentes de IA deben seguir [AGENTS.md](AGENTS.md).
- **Nomenclatura**: CamelCase para componentes, kebab-case para archivos de utilidad.
- **Tests**: Incluir pruebas para nuevas funcionalidades. Consultar [TESTING_GUIDE.md](docs/TESTING_GUIDE.md).

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Coverage report
npm run test:coverage

# Tests de accesibilidad
npm run test:a11y

# Tests E2E (si están configurados)
npm run test:e2e
```

## 📊 Fuentes de Datos

### Precios

- **Supermercados**: APIs y scraping ético de sitios oficiales.
- **Mercados**: Relevamientos presenciales semanales.
- **Tiendas Especializadas**: Contacto directo y verificación.

### Información Nutricional

- **USDA FoodData Central**: Base de datos oficial.
- **INCMNSZ**: Tablas nutricionales mexicanas.
- **Etiquetas de Productos**: Información directa del fabricante.
- **Literatura Científica**: Estudios peer-reviewed.

### Actualización

- **Precios**: Semanalmente.
- **Datos Nutricionales**: Mensualmente.
- **Recetas**: Revisión trimestral.