import { trigger, transition, style, state, animate, query } from '@angular/animations';
export var translateElementsTrigger = trigger('translateElementTrigger', [
    transition('void => no-animate', []),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: '*' }),
        animate(200, style({ transform: 'translateX(100%)', opacity: '0' }))
    ]),
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: '0' }),
        animate(200, style({ transform: 'translateX(0)', opacity: '*' }))
    ])
]);
export var highlightOnAddProduct = trigger('highlightOnAddProduct', [
    transition(':enter', [
        query('.shopping-cart--product', animate('400ms', style({ backgroundColor: '#89BC72 ' }))),
        query('.shopping-cart--product', animate('200ms 4800ms', style({ backgroundColor: '*' })))
    ])
]);
export var accordionGrowShrinkTrigger = trigger('accordionGrowShrinkTrigger', [
    state('closed', style({ opacity: 0, display: 'none', height: '0px', marginTop: '0px', marginBottom: '0px', paddingTop: '0px', paddingBottom: '0px' })),
    state('opened', style({ opacity: 1, display: '*', height: '*', marginTop: '*', marginBottom: '*', paddingTop: '*', paddingBottom: '*' })),
    transition('opened => closed', animate('200ms')),
    transition('closed => opened', animate('200ms'))
]);
