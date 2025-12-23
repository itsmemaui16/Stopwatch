class Stopwatch {
    constructor() {
        this.display = document.getElementById('display');
        this.lapTimesContainer = document.getElementById('lapTimes');
        this.lapCountElement = document.getElementById('lapCount');
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.lapBtn = document.getElementById('lapBtn');

        this.recentRecordsContainer = document.getElementById('recentRecords');

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
        this.lapTimes = [];
        this.records = [];
        this.timer = null;
        this.isRunning = false;
        this.startTime = null;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.stopBtn.addEventListener('click', () => this.stop());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.lapBtn.addEventListener('click', () => this.recordLap());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startBtn.disabled = true;
            this.resetBtn.disabled = true;
            this.stopBtn.disabled = false;
            this.lapBtn.disabled = false;

            const now = Date.now();
            if (!this.startTime) this.startTime = now;
            else this.startTime += (now - this.pauseTime);

            this.timer = requestAnimationFrame(() => this.update());
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            this.pauseTime = Date.now();
            cancelAnimationFrame(this.timer);
            this.startBtn.disabled = false;
            this.resetBtn.disabled = false;
            this.stopBtn.disabled = true;
            this.lapBtn.disabled = true;

            if (this.lapTimes.length > 0) this.saveRecord();
            this.lapTimes = [];
            this.updateLapDisplay();
        }
    }

    reset() {
        this.stop();
        this.hours = this.minutes = this.seconds = this.milliseconds = 0;
        this.lapTimes = [];
        this.startTime = null;
        this.updateDisplay();
        this.lapTimesContainer.innerHTML = '';
        this.lapCountElement.textContent = '0 laps';
    }

    recordLap() {
        if (!this.isRunning) return;
        const elapsed = Date.now() - this.startTime;
        const lap = {
            hours: Math.floor(elapsed / 3600000),
            minutes: Math.floor((elapsed / 60000) % 60),
            seconds: Math.floor((elapsed / 1000) % 60),
            milliseconds: Math.floor(elapsed % 1000),
            totalMs: elapsed
        };
        this.lapTimes.push(lap);
        this.updateLapDisplay();
    }

    updateDisplay() {
        const h = String(this.hours).padStart(2,'0');
        const m = String(this.minutes).padStart(2,'0');
        const s = String(this.seconds).padStart(2,'0');
        const ms = String(this.milliseconds).padStart(3,'0');
        this.display.textContent = `${h}:${m}:${s}.${ms}`;
    }

    updateLapDisplay() {
        this.lapTimesContainer.innerHTML = '';
        this.lapTimes.forEach((lap, idx) => {
            const div = document.createElement('div');
            div.className = 'lap-item';
            div.innerHTML = `Lap ${idx+1}: ${String(lap.hours).padStart(2,'0')}:${String(lap.minutes).padStart(2,'0')}:${String(lap.seconds).padStart(2,'0')}.${String(lap.milliseconds).padStart(3,'0')}`;
            this.lapTimesContainer.appendChild(div);
        });
        this.lapCountElement.textContent = `${this.lapTimes.length} laps`;
    }

    update() {
        if (!this.isRunning) return;
        const elapsed = Date.now() - this.startTime;
        this.milliseconds = elapsed % 1000;
        this.seconds = Math.floor((elapsed / 1000) % 60);
        this.minutes = Math.floor((elapsed / 60000) % 60);
        this.hours = Math.floor(elapsed / 3600000);
        this.updateDisplay();
        this.timer = requestAnimationFrame(() => this.update());
    }

    saveRecord() {
        const record = [...this.lapTimes];
        const sorted = [...record].sort((a,b)=>a.totalMs-b.totalMs);
        this.records.push(record);

        const container = document.createElement('div');
        container.className = 'record-item';

        record.forEach((lap, idx) => {
            const div = document.createElement('div');
            let label = '';
            if (lap.totalMs === sorted[0].totalMs) label = `<span class="fastest-label">Fastest</span>`;
            if (lap.totalMs === sorted[sorted.length-1].totalMs) label += ` <span class="slowest-label">Slowest</span>`;
            div.innerHTML = `Lap ${idx+1}: ${String(lap.hours).padStart(2,'0')}:${String(lap.minutes).padStart(2,'0')}:${String(lap.seconds).padStart(2,'0')}.${String(lap.milliseconds).padStart(3,'0')} ${label}`;
            container.appendChild(div);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Record';
        deleteBtn.addEventListener('click', () => container.remove());
        container.appendChild(deleteBtn);

        this.recentRecordsContainer.appendChild(container);
    }
}

document.addEventListener('DOMContentLoaded', () => new Stopwatch());
