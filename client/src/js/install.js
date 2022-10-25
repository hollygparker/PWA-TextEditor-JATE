const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// making the class list for the toggle btn to show before install
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// once install btn is clicked prompt user
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// once the app is installed the deferred prompt should be null
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
