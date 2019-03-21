import { trigger, transition, style, state, animate } from '@angular/animations';
export var stickyElementToggleTrigger = trigger('stickyElementToggleTrigger', [
    state('disappear', style({
        opacity: 0,
        visibility: 'hidden'
    })),
    state('appear', style({
        opacity: 1,
        visibility: 'visible'
    })),
    transition('* => appear', animate('200ms ease-in')),
    transition('* => disappear', animate('200ms ease-out')),
]);
export var growShrinkElementHorizontallyTrigger = trigger('growShrinkElementHorizontallyTrigger', [
    state('grow', style({
        width: '*'
    })),
    state('shrink', style({
        width: '*'
    })),
    transition('shrink => grow', animate('200ms 100ms ease-in')),
    transition('grow => shrink', animate('200ms 100ms ease-out')),
]);
