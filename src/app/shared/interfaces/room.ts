export interface Room {
  roomName: string;
  userIds: [string];
  private: boolean;
  roomOwnerId: string;
  _id: string;
}
