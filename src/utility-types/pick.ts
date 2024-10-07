// Pick

// The 'Pick' utility type in TypeScript allows the creation of a new type by selecting a set of properties from an existing type.
// Useful for creating types that only need specific properties from a larger type.

// Syntax: Pick<Type, Keys>

type Restaurant = {
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  isOpen: boolean;
  capacity: number;
};

// New type, selecting 'name', 'location' and 'capacity' properties from Restaurant
type SocialEvent = Pick<Restaurant, 'name' | 'location' | 'capacity'>;

const upcomingEvent: SocialEvent = { name: "Christmas party", location: "Horizon Resort", capacity: 300 };
// In this example, only the name, location and capacity properties can be included.