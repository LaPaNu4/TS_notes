
// typeof

type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

export { };
    
    
/// in
    
    
    // type Admin = {
    //   name: string;
    //   privileges: string[];
    // };

    // type Employee = {
    //   name: string;
    //   startDate: Date;
    // };

    // type AdminOrEmployee = Admin | Employee;

    // function printDetails(obj: AdminOrEmployee) {
    //   console.log(`Name: ${obj.name}`);

    //   if ("privileges" in obj) {
    //     console.log(`Privileges: ${obj.privileges.join(", ")}`);
    //   }

    //   if ("startDate" in obj) {
    //     console.log(`Start Date: ${obj.startDate}`);
    //   }
    // }

    // export {};

///////////////////////////////////////////////
    //   instanceof

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

// Define your type

type Vehicle = Car | Truck;

// Create your instances

const carInstance = new Car();
const truckInstance = new Truck();

// Function to use vehicle

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(carInstance);
useVehicle(truckInstance);

export {};


// as

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Staff = Admin | Employee;

function isEmployee(staff: Staff): staff is Employee {
  return (staff as Employee).startDate !== undefined;
}

const staffMember: Staff = { name: "Bob", startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}

export {};

/////////////////////////////

const input = document.getElementById("inputEmail") as HTMLInputElement;

input.value = "test@test.ts";

export {};



