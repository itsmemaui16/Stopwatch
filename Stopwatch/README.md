# Precision Stopwatch Web App

## Overview
This is a **Precision Stopwatch** web application that allows users to measure time accurately, record lap times, and manage recent records. It features a modern, animated background and a responsive design that works across devices.

The app tracks time with millisecond precision and allows users to view, label, and delete records easily.

---

## Features & Output

1. **Start / Stop / Reset**
   - **Start**: Begins timing. The **Reset** and **Start** buttons are disabled while running to prevent errors.
   - **Stop**: Stops timing and finalizes the lap record.
   - **Reset**: Resets the stopwatch to `00:00:00.000`.

2. **Lap Functionality**
   - **Lap** button records the current elapsed time without stopping the stopwatch.
   - Displays all lap times in the lap section dynamically.
   - Each lap shows hours, minutes, seconds, and milliseconds.

3. **Fastest & Slowest Laps**
   - Each record automatically highlights:
     - **Fastest Lap** with a green label
     - **Slowest Lap** with a red label
   - Labels appear beside the respective lap time.

4. **Recent Records**
   - Once the stopwatch is stopped, all collected laps are saved as **one record** in the Recent Records section.
   - Each record is displayed in a clean, scrollable container.
   - Users can delete a record with a **Delete Record** button located below the laps for that record.

5. **Animated Background**
   - The stopwatch features a dynamic gradient animated background to enhance visual appeal.

6. **Responsive Design**
   - Buttons, lap display, and recent records adjust seamlessly to different screen sizes.
   - Lap and record buttons have uniform size for a professional look.

---

## How the Output Works

1. **Starting the Stopwatch**
   - Click **Start**: the timer begins running in milliseconds precision.
   - **Stop** and **Lap** buttons become active; **Start** and **Reset** are disabled.

2. **Recording Laps**
   - Click **Lap** to capture the current time.
   - Laps appear in the **Lap Times** section.
   - Each lap is labeled as **Fastest** or **Slowest** when a record is saved.

3. **Stopping and Saving Records**
   - Click **Stop** to end the current session.
   - All laps recorded during that session are saved as a **single record** in the **Recent Records** section.
   - Users can delete any record with the **Delete Record** button.

4. **Resetting**
   - Click **Reset** to clear the stopwatch and lap times, preparing it for a new session.

---

## Technologies Used
- **HTML5 & CSS3** – Structure, styling, and animated gradient background.
- **JavaScript** – Stopwatch logic, lap recording, fastest/slowest calculation, and dynamic DOM updates.
- **CSS Animations** – Animated gradient background.

---

## Screenshots
- **Stopwatch Display** – Shows time with milliseconds.
- **Lap Times Section** – Displays lap times with fastest/slowest labels.
- **Recent Records** – Stores multiple records with delete functionality.
- **Animated Background** – Dynamic gradient animation.

---

## Usage
1. Open `index.html` in a browser.
2. Click **Start** to begin timing.
3. Use **Lap** to record lap times while running.
4. Click **Stop** to finish the session and save the record.
5. Click **Reset** to clear the stopwatch.
6. Manage records using the **Delete Record** buttons.
