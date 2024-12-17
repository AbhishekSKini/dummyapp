interface Coordinates{
    lat:number,
    lng:number
}

export interface CovidDataItem {
    id?: string; // Unique identifier
    state?: string;
    deaths: number;
    recovered: number;
    totalCases:number;
    activeCases:number;
    coordinates?:Coordinates;
    
  }
     // Define the prop types
   export  interface CovidTableProps {
        data: CovidDataItem[]; // The data prop should be an array of CovidDataItem
      }