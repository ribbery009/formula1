export interface Driver {
    id: undefined | null | number
    code: string
    firstname: string
    lastname: string
    country: string
    team: string
    place: number
  }

  export type DriverModel = Driver | {} | undefined;

  