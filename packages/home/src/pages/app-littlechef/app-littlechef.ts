import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

import 'littlechef/src/components/lc-dragdrop.ts';

@customElement('app-littlechef')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>Littchef</h2>

        <sl-card>
          <h2>Burger</h2>

          <p>Takes 5 mintues to cook
          </p>

          <p>Order now <a
              href="/orders/burgers">Chezzy burger</a></p>
        </sl-card>
        <sl-card>
          <h2>French fries</h2>

          <p>Takes 5 mintues to cook
          </p>

          <p>Order now <a
              href="/orders/frenchfries">French fries</a></p>
        </sl-card>
        <app-lc-drag-drop></app-lc-drag-drop>
      </main>
    `;
  }
}
