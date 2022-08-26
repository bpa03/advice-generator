interface AdviceService {
  readonly API_URL: string;
}

export interface AdviceType {
  slip: SlipType;
}

export interface SlipType{
  id:     number;
  advice: string;
}

class Advice implements AdviceService {
  declare readonly API_URL: string;

  constructor() {
    this.API_URL = import.meta.env.APP_API_URL;
  }

  async getRandomAdvice(): Promise<AdviceType> {
    const request: Request = new Request(this.API_URL, {
      method: 'GET',
      credentials: 'omit',
      mode: 'cors',
    });
    const response = await fetch(request);
    const data: AdviceType = await response.json();
    return data;
  }
}

export default new Advice();
