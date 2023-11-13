interface IDocumentPickerAsset {
    mimeType?: string; // Puede ser string o undefined
    name: string;
    size?: number; // Puede ser number o undefined
    uri: string;
  }
  
 export interface IDocumentPickerResponse {
    assets: IDocumentPickerAsset[] | null; // Ahora permite null
    canceled: boolean;
  }