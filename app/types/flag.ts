export type RelationshipFlag = {
  id: string;
  name: string;
  category:
    | "communication"
    | "trust"
    | "boundaries"
    | "relationship"
    | "social"
    | "accountability";
  weight: number;
  critical?: boolean;
  active: boolean;
};
