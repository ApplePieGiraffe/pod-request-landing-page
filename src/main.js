import App from './App.svelte';

const app = new App({
    target: document.body,
});

export default app;

// reset page scroll...

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// GSAP

let timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.divider', { height: '8rem', duration: 1 });
timeline.to('.intro-logo', { left: '25%', duration: 1 }, '-=.6');
timeline.to('.intro-heading', { opacity: '1', left: '55%', duration: 1 }, '-=1');
timeline.to('.intro-logo', { left: '51%', duration: 1, delay: 1 });
timeline.to('.intro-heading', { opacity: '0', duration: 1 }, '-=1');
timeline.to('.divider', { height: '0', duration: 0.5 });
timeline.to('.loading-screen', { opacity: '0', duration: 0.5, delay: 0.25 });
timeline.to('.loading-screen', { display: 'none' });
timeline.to('body', { overflow: 'visible' });
