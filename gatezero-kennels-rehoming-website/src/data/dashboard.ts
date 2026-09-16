export interface Kpi {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaUp: boolean;
  sub: string;
}

export const KPIS: Kpi[] = [
  { id: "adoptions", label: "Total Rehomings", value: "1,284", sub: "since 2021 · lifetime take-back", delta: "+12 this month", deltaUp: true },
  { id: "visitors", label: "Daily Visitors", value: "486", sub: "site + facility footfall", delta: "+8.2% vs last wk", deltaUp: true },
  { id: "care", label: "Care Nights (Boarding)", value: "3,912", sub: "boarding + daycare this quarter", delta: "+14% occupancy", deltaUp: true },
  { id: "training", label: "Training Sessions", value: "1,046", sub: "grooming 2,310 · training 1,046 YTD", delta: "+96 this month", deltaUp: true },
];

export const ADOPTION_TREND = [
  { m: "Mar", applications: 42, handovers: 18, boarding: 210 },
  { m: "Apr", applications: 55, handovers: 22, boarding: 244 },
  { m: "May", applications: 48, handovers: 19, boarding: 261 },
  { m: "Jun", applications: 63, handovers: 27, boarding: 289 },
  { m: "Jul", applications: 71, handovers: 31, boarding: 312 },
  { m: "Aug", applications: 68, handovers: 29, boarding: 298 },
  { m: "Sep", applications: 74, handovers: 34, boarding: 326 },
];

export const BREED_MIX = [
  { name: "Golden", value: 28 },
  { name: "Labrador", value: 22 },
  { name: "Indie", value: 24 },
  { name: "GSD", value: 12 },
  { name: "Beagle", value: 14 },
];

export const SERVICE_SPLIT = [
  { name: "Boarding", value: 38 },
  { name: "Grooming", value: 31 },
  { name: "Training", value: 21 },
  { name: "Vet care", value: 10 },
];

export interface PipelineCard {
  id: string;
  family: string;
  pup: string;
  city: string;
  age: string;
  tag?: string;
}

export const PIPELINE_INIT: Record<string, PipelineCard[]> = {
  applied: [
    { id: "p1", family: "Aarav Mehta", pup: "Simba", city: "Andheri W", age: "2h ago", tag: "1BHK + kids" },
    { id: "p2", family: "Sana Sheikh", pup: "Chai", city: "Bandra", age: "6h ago", tag: "First-timer" },
    { id: "p3", family: "Rohan Iyer", pup: "Biscuit", city: "Powai", age: "1d ago" },
    { id: "p4", family: "Kavya Nair", pup: "Not sure", city: "Juhu", age: "1d ago", tag: "Needs advice" },
  ],
  screening: [
    { id: "p5", family: "Priya & Dev", pup: "Bruno", city: "Versova", age: "call Thu 5pm" },
    { id: "p6", family: "Farhan M.", pup: "Coco (waitlist)", city: "Andheri E", age: "call Fri 11am" },
  ],
  meet: [
    { id: "p7", family: "Aditi K.", pup: "Chai", city: "Malad", age: "Sat 10:30am" },
    { id: "p8", family: "Rahul Verma", pup: "Simba", city: "Goregaon", age: "Sat 12pm", tag: "Kids coming" },
  ],
  homecheck: [
    { id: "p9", family: "Neha & Arjun", pup: "Coco", city: "Lokhandwala", age: "visit Tue", tag: "Reserved" },
  ],
};

export interface Kennel {
  id: string;
  name: string;
  occupant: string | null;
  detail: string;
  until?: string;
}

export const KENNELS: Kennel[] = [
  { id: "k1", name: "Suite A1", occupant: "Milo · Beagle", detail: "Boarding", until: "Sep 19" },
  { id: "k2", name: "Suite A2", occupant: null, detail: "Deep-cleaned · ready" },
  { id: "k3", name: "Suite A3", occupant: "Zara · Labrador", detail: "Boarding + training", until: "Sep 22" },
  { id: "k4", name: "Suite B1", occupant: "Chikoo · Indie", detail: "Post-groom rest", until: "Today 6pm" },
  { id: "k5", name: "Suite B2", occupant: null, detail: "Ready" },
  { id: "k6", name: "Suite B3", occupant: "Simba", detail: "Resident pup · not for boarding" },
  { id: "k7", name: "Daycare P1", occupant: "4 pups", detail: "Daycare · pickup 7pm" },
  { id: "k8", name: "Daycare P2", occupant: null, detail: "Ready" },
];

export interface Booking {
  id: string;
  pet: string;
  owner: string;
  service: "Boarding" | "Grooming" | "Training" | "Vet";
  when: string;
  staff: string;
  status: "Confirmed" | "In progress" | "Pending";
}

export const BOOKINGS: Booking[] = [
  { id: "b1", pet: "Milo · Beagle", owner: "Priya S.", service: "Boarding", when: "Sep 16 – 19", staff: "Ravi", status: "In progress" },
  { id: "b2", pet: "Zara · Labrador", owner: "Farhan M.", service: "Training", when: "Tue 4:00 pm", staff: "Coach Imran", status: "Confirmed" },
  { id: "b3", pet: "Chikoo · Indie", owner: "Aditi K.", service: "Grooming", when: "Today 3:30 pm", staff: "Sana", status: "Confirmed" },
  { id: "b4", pet: "Bruno · GSD", owner: "Kennel (resident)", service: "Vet", when: "Wed 10:00 am", staff: "Dr. Meera", status: "Pending" },
  { id: "b5", pet: "Cookie · Shih Tzu", owner: "Ritu J.", service: "Grooming", when: "Wed 12:30 pm", staff: "Sana", status: "Confirmed" },
  { id: "b6", pet: "Rocky · Indie", owner: "Vikram D.", service: "Boarding", when: "Sep 20 – 24", staff: "Ravi", status: "Pending" },
];

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  interest: string;
  city: string;
  source: "Website" | "Instagram" | "Walk-in" | "WhatsApp";
  time: string;
  status: "New" | "Contacted" | "Visit booked" | "Converted" | "Dropped";
  note: string;
}

export const ENQUIRIES_INIT: Enquiry[] = [
  { id: "e1", name: "Aarav Mehta", phone: "98200 12345", interest: "Simba · Golden", city: "Mumbai", source: "Website", time: "2h ago", status: "New", note: "1BHK, 2 kids, first dog" },
  { id: "e2", name: "Sana Sheikh", phone: "98111 22334", interest: "Chai · Indie", city: "Mumbai", source: "Instagram", time: "6h ago", status: "New", note: "Works from home" },
  { id: "e3", name: "Rohan Iyer", phone: "99301 44556", interest: "Biscuit · Beagle", city: "Pune", source: "Website", time: "1d ago", status: "Contacted", note: "Needs society NOC help" },
  { id: "e4", name: "Kavya Nair", phone: "97690 77889", interest: "Breed advice", city: "Mumbai", source: "WhatsApp", time: "1d ago", status: "Contacted", note: "Husky-curious → steer to Indie" },
  { id: "e5", name: "Dev Patel", phone: "98901 33445", interest: "Boarding (Diwali)", city: "Mumbai", source: "Walk-in", time: "2d ago", status: "Visit booked", note: "2 labs, Oct 18–26" },
  { id: "e6", name: "Ira Bose", phone: "98333 99001", interest: "Grooming + training", city: "Mumbai", source: "Instagram", time: "2d ago", status: "Converted", note: "Monthly grooming plan" },
  { id: "e7", name: "Nikhil Rao", phone: "98220 55667", interest: "GSD pup", city: "Other", source: "Website", time: "3d ago", status: "Dropped", note: "Outside service area" },
  { id: "e8", name: "Meera Joshi", phone: "99870 11223", interest: "Coco · waitlist", city: "Mumbai", source: "Website", time: "3d ago", status: "Visit booked", note: "Met pups Sat, loves Coco" },
];

export const TASKS = [
  { id: "t1", text: "Call back 4 new applications (SLA: 24h)", done: false, meta: "Due today" },
  { id: "t2", text: "Confirm Saturday Meet & Greet slots", done: true, meta: "2 families" },
  { id: "t3", text: "Bruno — Rabies shot due this week", done: false, meta: "Vet · Wed" },
  { id: "t4", text: "Deep-clean Suite A2 before Fri check-in", done: false, meta: "Boarding" },
  { id: "t5", text: "Post Biscuit's new photos to Instagram", done: false, meta: "Marketing" },
];
