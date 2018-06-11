export interface Message {
  _id: string;
  username: string;
  dateCreated: Date;
  roomId: string;
  content: string;
  userId: string;
}
