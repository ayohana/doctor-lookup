# [Doctor Lookup](https://github.com/ayohana/doctor-lookup.git/)

#### Asynchrony and API Exercise with JavaScript for [Epicodus](https://www.epicodus.com/), 02.14.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

**This web application is for patients to look up for a list of doctors nearby who can treat their medical symptoms.** Patients will be able to enter their medical issue (e.g. "sore throat", "chest pain", etc.) into a form and retrieve a list of doctors in Seattle who can treat the medical issue they have specified.

## User Stories

* As a patient, I want to be able to search for health providers that are related to my medical symptoms so that I can see a provider with the correct medical specialty.
* As a patient, I want to be able to see a list of health providers in my city so that I can save time.

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Returns User's Medical Symptom** | rash | rash |
| **Program Returns a List of Doctors via BetterDoctor API** | rash | List of Doctors |

</details>

## Setup/Installation Requirements

* Clone this [repository](https://github.com/ayohana/doctor-lookup.git/)
* Sign up/Log in to [BetterDoctor](https://developer.betterdoctor.com/) to retrieve an API key.
  * Open `.env` file in the root directory.
  * Copy the API key from BetterDoctor.
  * Paste the key to replace `[insert key here]` in `.env` file.
    > API_KEY = `[insert key here]`
  * **Save** the `.env` file.

* Open the command line and navigate into the repository.
  * Use the command `npm install` to install all necessary plugins.
  * Use the command `npm run start` to start the web application.

## Known Bugs

No known bugs at this time.

## Support and contact details

Feel free to provide feedback via email: adela.yohana@gmail.com.

## Technologies Used

* BetterDoctor API
* HTML
* CSS
* Bootstrap
* JavaScript
* Markdown
* _npm*_

_*Check out `package.json` file to see the complete list of all plugins._

### License

This web application is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah**