# Horizontal Timeline - College-Space

This is a responsive Dynamic Timeline Feature for the College-Space project on BuildSpace. I contributed the Timeline Feature and the [Landing page](https://github.com/AleHS01/college-space/tree/main).
Each dot in the timeline is interactive, featuring a hover effect that reveals a tooltip. This tooltip displays detailed information, including a specific date and a color scheme customizable to your preferences.

<div align="center">
  <img width="840" alt="Screenshot 2025-01-02 at 10 34 12 PM" src="https://github.com/user-attachments/assets/949947f7-520a-4d3a-975c-ee8df49458a1" />
  <img width="840" alt="Screenshot 2025-01-02 at 10 37 01 PM" src="https://github.com/user-attachments/assets/cd0c496b-c148-4a76-b274-6ae360af8dfc" />
</div>

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# Prerequisites:

## Mac OS
### For this only install **brew**, Install anything below **brew**, through **brew**.
- [brew](https://brew.sh/)
- [node](https://nodejs.org/en)
  
## Install brew

```bash

bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```


## Install node

```bash
brew install node
```
## Check npm Version
```bash
npm -v
```

## Clone the [Timeline](https://github.com/AleHS01/horizontal-timeline.git) repo
```bash
git clone https://github.com/AleHS01/horizontal-timeline.git
```

## cd into Timeline

```bash
cd Timeline
```

## Install libraries  & Dependencies

```bash
npm i
```

## Run the app

```bash
npm run dev
```
## Usage
To customize the timeline:

1. Open the file `src/deadline.js`

2. Modify the provided data array to define the values that should appear in the timeline.

   - Adjust attributes such as dealines, description, and additional data (will need to modify display logic).

3. Specify custom colors for each dot by assigning appropriate color values in the same data array.
