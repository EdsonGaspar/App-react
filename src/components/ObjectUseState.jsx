import { useState } from "react";

export function ObjectUseState() {
  const [person, setPerson] = useState({
    firstName: "Edson",
    lastName: "Gaspar",
    email: "edson@gaspar.vaawel",
  });

  const handleChangeFirstName = (e) => {
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email,
    });
  };

  const handleChangeLastName = (e) => {
    setPerson({
      firstName: person.firstName,
      lastName: e.target.value,
      email: person.email,
    });
  };

  function handleChangeEmail(e) {
    setPerson({
      firstName: person.firstName,
      lastName: person.lastName,
      email: e.target.value,
    });
  }

  return (
    <div>
      <form>
        <label>
          Primeiro Nome{" "}
          <input
            type="text"
            value={person.firstName}
            onChange={handleChangeFirstName}
            className="border rounded-sm px-2 py-1 mr-3"
          />
        </label>
        <label>
          Ultimo Nome{" "}
          <input
            type="text"
            value={person.lastName}
            onChange={handleChangeLastName}
            className="border rounded-sm px-2 py-1 mr-3"
          />
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            value={person.email}
            onChange={handleChangeEmail}
            className="border rounded-sm px-2 py-1 mr-3"
            placeholder="xxx@.y"
          />
        </label>
      </form>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
