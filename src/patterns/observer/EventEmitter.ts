export class EventEmitter {
  private subscribers: Map<string, Function[]> = new Map();

  subscribe(event: string, callback: Function) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)?.push(callback);
    
    return () => {
      const callbacks = this.subscribers.get(event) || [];
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  emit(event: string, data?: any) {
    const callbacks = this.subscribers.get(event) || [];
    callbacks.forEach(callback => callback(data));
  }
}

export const globalEventEmitter = new EventEmitter();