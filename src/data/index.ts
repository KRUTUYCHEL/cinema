const LS_KEY = 'orders';

export interface Order {
  id: number;
  hall: Hall;
  film: Film;
  seance: Seance;
  selected: SelectedPlace[];
  state: 'selectingChairs' | 'confirmation' | 'ordered',
  timestamp: string;
  modified_hall_config: string;
}

export interface Hall {
  hall_config: string;
  hall_id: string;
  hall_name: string;
  hall_open: string;
  hall_places: string;
  hall_price_standart: string;
  hall_price_vip: string;
  hall_rows: string;
}

export interface Seance {
  seance_end: string;
  seance_filmid: string;
  seance_hallid: string;
  seance_id: string;
  seance_start: string;
  seance_time: string;
}

export interface Film {
  film_description: string;
  film_duration: string;
  film_id: string;
  film_name: string;
  film_origin: string;
  film_poster: string;
}

export interface SelectedPlace {
  row: number;
  column: number;
  vip: boolean;
}

class Data {
  public getOrderList(): Order[] {
    const stringData = localStorage.getItem(LS_KEY);
    if (!stringData) return [];

    try {
      return JSON.parse(stringData) as Order[];
    } catch (e: any) {
      localStorage.removeItem(LS_KEY);
    }
    return [];
  }

  public getOrder(id: number | string): Order {
    return this.getOrderList().find(p => p.id.toString() === id.toString()) as Order;
  }

  public saveOrder(order: Order) {
    const orders = this.getOrderList();
    const lsOrder = orders.find(p => p.id.toString() === order.id.toString());
    if (!lsOrder) throw new Error("Something went wrong");

    Object.assign(lsOrder, order);

    localStorage.setItem(LS_KEY, JSON.stringify(orders));
  }

  public createOrder(
    partialOrder: Omit<Order, 'id' | 'state' | 'selected' | 'timestamp' | 'modified_hall_config'>,
    selectedDate: Date
  ): Order {
    const orders = this.getOrderList();
    const max = Math.max(...orders.map(p => Number(p.id)), 0);
    const nextId = max + 1;
    debugger;

    const currentDate = selectedDate;
    let selectedYear = currentDate.getFullYear();
    let selectedMonth = currentDate.getMonth();
    let selectedDay = currentDate.getDate();
    const seanceStartHours = Math.trunc(
      Number(partialOrder.seance.seance_start) / 60
    );
    const seanceStartMinutes =
      Number(partialOrder.seance.seance_start) % 60;
    const seanceStartDate = new Date(
      selectedYear,
      selectedMonth,
      selectedDay,
      seanceStartHours,
      seanceStartMinutes
    );
    const tm = String(
      seanceStartDate.getTime() / 1000
    );

    const newOrder: Order = {
      id: nextId,
      state: 'selectingChairs',
      selected: [],
      timestamp: tm,
      modified_hall_config: '',
      ...partialOrder
    };
    orders.push(newOrder);

    localStorage.setItem(LS_KEY, JSON.stringify(orders));

    return newOrder;
  }
}

export default new Data();