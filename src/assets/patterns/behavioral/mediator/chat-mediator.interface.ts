export interface ChatMediator {
  sendMessage(message: string, sender: User): void;

  addUser(user: User): void;
}

export interface User {
  receiveMessage(message: string): void;

  sendMessage(message: string): void;
}
