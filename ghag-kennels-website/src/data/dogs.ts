export type DogStatus = "Available" | "Reserved";

export interface HealthRecord {
  label: string;
  value: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  breedKey: string;
  age: string;
  gender: "Male" | "Female";
  coat: string;
  status: DogStatus;
  rescued?: boolean;
  tags: string[];
  image: string;
  story: string;
  energy: "Low" | "Moderate" | "High";
  adultSize: string;
  goodWith: string[];
  training: string;
  health: HealthRecord[];
}

export const DOGS: Dog[] = [
  {
    id: "simba",
    name: "Simba",
    breed: "Golden Retriever",
    breedKey: "golden",
    age: "10 weeks",
    gender: "Male",
    coat: "Cream",
    status: "Available",
    tags: ["Friendly", "Good with kids", "Playful"],
    image: "/images/simba.jpg",
    story:
      "The first to greet you and the last to leave your lap. Simba is a classic golden — soft-mouthed, people-obsessed and endlessly patient with children. He was raised alongside his mother and littermates in our whelping room, so he arrives pre-socialized to household sounds, grooming and gentle handling.",
    energy: "Moderate",
    adultSize: "Large · 25–32 kg",
    goodWith: ["Kids", "Other dogs", "First-time parents", "Apartments"],
    training: "Responds to his name, crate-comfortable, and has started on 'sit'. Sleeps through most of the night.",
    health: [
      { label: "Vaccination", value: "DHPPi Dose 1 done · Dose 2 due in ~2 weeks (we remind you)" },
      { label: "Deworming", value: "Done at 3, 5, 7 & 9 weeks · next due at 12 weeks" },
      { label: "Microchip", value: "Registered & traceable · No. 9810 22XX XXXX" },
      { label: "Vet exam", value: "Cleared — heart, hips, eyes and bite all normal" },
    ],
  },
  {
    id: "bruno",
    name: "Bruno",
    breed: "German Shepherd",
    breedKey: "gsd",
    age: "12 weeks",
    gender: "Male",
    coat: "Black & Tan",
    status: "Available",
    tags: ["Alert", "Loyal", "Active"],
    image: "/images/bruno.jpg",
    story:
      "Bruno watches everything before he does anything — the hallmark of a thoughtful shepherd. He's confident without being pushy, bonds deeply with his people, and will thrive with a family that enjoys training as much as cuddles. Best suited to someone who has raised a working breed before.",
    energy: "High",
    adultSize: "Large · 30–40 kg",
    goodWith: ["Active families", "Experienced handlers", "Large homes"],
    training: "Leash-introduced, very food-motivated, and already offering 'sit' and 'down' in short sessions.",
    health: [
      { label: "Vaccination", value: "DHPPi Doses 1 & 2 done · Rabies due at 14 weeks" },
      { label: "Deworming", value: "Up to date · next due at 16 weeks" },
      { label: "Microchip", value: "Registered & traceable · No. 9810 24XX XXXX" },
      { label: "Vet exam", value: "Cleared — strong hips for age, no congenital flags" },
    ],
  },
  {
    id: "coco",
    name: "Coco",
    breed: "Labrador (Chocolate)",
    breedKey: "labrador",
    age: "11 weeks",
    gender: "Female",
    coat: "Chocolate",
    status: "Reserved",
    tags: ["Calm", "Cuddly", "Gentle"],
    image: "/images/coco.jpg",
    story:
      "Coco is the puppy who curls into your feet while you work. Unusually calm for a Labrador, she prefers a slow sniff around the building compound to a game of fetch. She's currently reserved by a family whose home check is underway — but waitlists do open up, and we'll be honest with you about the odds.",
    energy: "Low",
    adultSize: "Large · 25–32 kg",
    goodWith: ["Kids", "Cats", "Apartments", "First-time parents"],
    training: "Settles quickly in a crate, polite with food, and learning 'wait' at doorways.",
    health: [
      { label: "Vaccination", value: "DHPPi Dose 1 done · Dose 2 done last week · Rabies next" },
      { label: "Deworming", value: "Up to date · next due at 14 weeks" },
      { label: "Microchip", value: "Registered & traceable · No. 9810 23XX XXXX" },
      { label: "Vet exam", value: "Cleared — excellent body condition, calm temperament noted" },
    ],
  },
  {
    id: "chai",
    name: "Chai",
    breed: "Indie (Indian Pariah)",
    breedKey: "indie",
    age: "3 months",
    gender: "Female",
    coat: "Brown & White",
    status: "Available",
    rescued: true,
    tags: ["Adaptable", "Low Maintenance", "Hardy"],
    image: "/images/chai.jpg",
    story:
      "Chai was found near a Juhu bylane at five weeks, thin but tail-wagging. Eight weeks later she's the easiest dog at the facility — Indies are naturally hardy, heat-adapted, and brilliantly smart. She asks for very little: a shaded corner, two walks, and a human to observe the world with.",
    energy: "Moderate",
    adultSize: "Medium · 15–20 kg",
    goodWith: ["Apartments", "First-time parents", "Other dogs", "Cats"],
    training: "Naturally clean — almost house-trained already. Walks beautifully on a loose leash.",
    health: [
      { label: "Vaccination", value: "DHPPi Doses 1 & 2 done · Rabies done last week" },
      { label: "Deworming", value: "Rescue protocol completed · maintenance schedule shared" },
      { label: "Microchip", value: "Registered & traceable · No. 9810 29XX XXXX" },
      { label: "Vet exam", value: "Cleared — fully recovered, excellent immunity markers" },
    ],
  },
  {
    id: "biscuit",
    name: "Biscuit",
    breed: "Beagle",
    breedKey: "beagle",
    age: "9 weeks",
    gender: "Male",
    coat: "Tri-color",
    status: "Available",
    tags: ["Curious", "Merry", "Food-motivated"],
    image: "/images/biscuit.jpg",
    story:
      "Biscuit is powered entirely by his nose and an unshakeable belief that today is the best day ever. Beagles are joyful, sturdy family dogs — but his nose needs a secure balcony and patient recall training. If you can offer that, you'll never laugh more at a dog.",
    energy: "High",
    adultSize: "Medium · 9–11 kg",
    goodWith: ["Kids", "Other dogs", "Active families"],
    training: "Already follows treat trails across the room — scent games will be your superpower with him.",
    health: [
      { label: "Vaccination", value: "DHPPi Dose 1 done · Dose 2 due in ~3 weeks" },
      { label: "Deworming", value: "Done at 3, 5 & 7 weeks · next due at 12 weeks" },
      { label: "Microchip", value: "Registered & traceable · No. 9810 26XX XXXX" },
      { label: "Vet exam", value: "Cleared — ears clean, heart sound, very food-driven (noted!)" },
    ],
  },
];

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "golden", label: "Golden" },
  { key: "gsd", label: "GSD" },
  { key: "labrador", label: "Labrador" },
  { key: "indie", label: "Indie" },
  { key: "beagle", label: "Beagle" },
];

export const HEALTH_POINTS = ["Vaccinated", "Microchipped", "Vet Checked"];

export const getDog = (id: string | undefined) => DOGS.find((d) => d.id === id);
