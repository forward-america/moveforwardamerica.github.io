/**
 * Header Component with Local Greeting
 * Displays a personalized greeting using localStorage
 */

class GreetingHeader {
    constructor() {
        this.userName = localStorage.getItem('userName') || null;
        this.init();
    }

    init() {
        this.createHeader();
        this.attachEventListeners();
    }

    getGreeting() {
        const hour = new Date().getHours();
        let timeGreeting;

        if (hour < 12) {
            timeGreeting = 'Good morning';
        } else if (hour < 18) {
            timeGreeting = 'Good afternoon';
        } else {
            timeGreeting = 'Good evening';
        }

        if (this.userName) {
            return `${timeGreeting}, ${this.userName}!`;
        } else {
            return `${timeGreeting}!`;
        }
    }

    createHeader() {
        const headerHTML = `
            <header class="greeting-header">
                <div class="greeting-container">
                    <div class="greeting-content">
                        <h1 class="greeting-text">${this.getGreeting()}</h1>
                        ${this.userName ?
                            `<button class="change-name-btn" id="changeNameBtn">Change Name</button>` :
                            `<button class="set-name-btn" id="setNameBtn">Set Your Name</button>`
                        }
                    </div>
                </div>
            </header>
        `;

        // Insert header at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    attachEventListeners() {
        const setNameBtn = document.getElementById('setNameBtn');
        const changeNameBtn = document.getElementById('changeNameBtn');

        if (setNameBtn) {
            setNameBtn.addEventListener('click', () => this.promptForName());
        }

        if (changeNameBtn) {
            changeNameBtn.addEventListener('click', () => this.promptForName());
        }
    }

    promptForName() {
        const name = prompt('What\'s your name?', this.userName || '');

        if (name && name.trim() !== '') {
            this.userName = name.trim();
            localStorage.setItem('userName', this.userName);
            this.updateGreeting();
        }
    }

    updateGreeting() {
        const greetingText = document.querySelector('.greeting-text');
        const button = document.querySelector('.set-name-btn, .change-name-btn');

        if (greetingText) {
            greetingText.textContent = this.getGreeting();
        }

        if (button) {
            if (this.userName) {
                button.textContent = 'Change Name';
                button.className = 'change-name-btn';
                button.id = 'changeNameBtn';
            } else {
                button.textContent = 'Set Your Name';
                button.className = 'set-name-btn';
                button.id = 'setNameBtn';
            }
        }
    }

    clearName() {
        this.userName = null;
        localStorage.removeItem('userName');
        this.updateGreeting();
    }
}

// Initialize header when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new GreetingHeader();
});
