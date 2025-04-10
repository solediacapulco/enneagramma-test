import { useAccessibility } from "../context/AccessibilityContext";

const AccessibilityMenu = () => {
  const { 
    fontSize, 
    setFontSize, 
    contrast, 
    setContrast, 
    readAloud, 
    setReadAloud 
  } = useAccessibility();

  return (
    <div id="accessibilityMenu" className="bg-white shadow-md rounded-md p-4 absolute right-4 top-16 z-10 w-64">
      <h2 className="font-medium text-gray-800 mb-2">Opzioni di accessibilità</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="fontSize" className="text-sm text-gray-600">Dimensione testo</label>
          <select 
            id="fontSize" 
            className="text-sm border rounded p-1"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="normal">Normale</option>
            <option value="large">Grande</option>
            <option value="xlarge">Molto grande</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="contrast" className="text-sm text-gray-600">Contrasto</label>
          <select 
            id="contrast" 
            className="text-sm border rounded p-1"
            value={contrast}
            onChange={(e) => setContrast(e.target.value)}
          >
            <option value="normal">Normale</option>
            <option value="high">Alto</option>
          </select>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="readAloud" 
            className="mr-2"
            checked={readAloud}
            onChange={(e) => setReadAloud(e.target.checked)}
          />
          <label htmlFor="readAloud" className="text-sm text-gray-600">Leggi ad alta voce</label>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;
