# [Doctor Lookup](https://github.com/ayohana/doctor-lookup.git/)

#### Asynchrony and API Exercise with JavaScript for [Epicodus](https://www.epicodus.com/), 02.14.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

**This web application is for patients to look up a list of doctors nearby who can treat their medical symptoms.** Patients will be able to enter their medical issue (e.g. "rash") into a form and retrieve a list of doctors in Seattle who can treat the medical issue they have specified.

## User Stories

* As a patient, I want to be able to search for health providers that are related to my medical symptoms so that I can see a provider with a related specialty.
* As a patient, I want to be able to see a list of health providers in my city so that I can plan my route and save time.
* As a patient, I want to be able to see my doctor's full name, credentials, practice address, phone number and website so that I know their contact information.
* As a new patient, I want to be able to check if a doctor of my choice is currently accepting new patients so that I can decide whether I can make an appointment with them.
* As a returning patient, I want to be able to search for my doctor's name and obtain their contact information so that I can call or email them for questions and appointments.

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Gathers User Input of Medical Symptom** | rash | rash |
| **Program Displays a List of Doctors Related to Symptom** | rash | List of Doctors best matched to rash |
| **Program Displays a List of Doctors Related to Name Search** | Varley | List of Doctors with last name Varley |
| **Program Displays Info of Each Doctor** | rash | Each Doctor: First name, Last name, Address, Phone number, Website and Status of "accepting new patients" |
| **Program Returns Error Message in Console with Any Error Encounter** | any != 200 OK status | `console.error:` There was an error handling your request: `error.message` |
| **Program Displays a Message if No Results in Query Response** | any unusual query | Sorry, no doctors meet the criteria you're looking for. |

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

* [BetterDoctor API](https://developer.betterdoctor.com/)
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