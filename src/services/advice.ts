import getRandomNumber from '@/helpers/getRandomNumber';

interface AdviceService {
  readonly API_URL: string;
}

export interface AdviceType {
  slip: SlipType;
}

export interface SlipType {
  id:     number;
  advice: string;
}

class Advice implements AdviceService {
  declare readonly API_URL: string;

  constructor() {
    this.API_URL = import.meta.env.APP_API_URL;
  }

  async getRandomAdvice(): Promise<AdviceType> {
    const randomNumber = getRandomNumber(0, 224);
    const url = this.API_URL + '/' + randomNumber;
    const request: Request = new Request(url, {
      method: 'GET',
      credentials: 'omit',
      mode: 'cors',
    });
    const response = await fetch(request);
    const data: AdviceType = await response.json();
    if (!data.slip) {
      return await this.getRandomAdvice();
    }
    return data;
  }
}

export default new Advice();
