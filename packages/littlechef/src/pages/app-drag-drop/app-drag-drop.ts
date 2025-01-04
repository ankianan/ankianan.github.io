import { LitElement, PropertyValues, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import { Droppable } from '@shopify/draggable';

@customElement('app-drag-drop')
export class DragDrop extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  insertHTMLToDocument() {
    document.body.insertAdjacentHTML('beforeend', `
    <style>
      .BlockLayout {
        display: flex;
        gap: 1rem;
      }
      .BlockWrapper span {
        padding: 1rem;
        display: inline-block;
      }  
      .BlockWrapper--isDropzone:has(.Block--isDraggable) {
        border: solid 1px pink;
        
      }
    </style>
    <div id="UniqueDropzone">
      <div class="BlockLayout">
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="1">
          <span tabindex="0" class="Block--isDraggable">One</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="2">
          <span tabindex="0" class="Block--isDraggable">Two</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="4">
          <span tabindex="0" class="Block--isDraggable">Four</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="8">
          <span tabindex="0" class="Block--isDraggable">Eight</span>
        </div>
      </div>
      <div class="BlockLayout">
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="1">
          <span>One</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="2">
          <span>Two</span>
        </div>
        <div class="BlockWrapper">
          <span>Three</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="4">
          <span>Four</span>
        </div>
          <div class="BlockWrapper">
          <span>Five</span>
        </div>
          <div class="BlockWrapper">
          <span>Six</span>
        </div>
          <div class="BlockWrapper">
          <span>Seve</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="8">
          <span>Eight</span>
        </div>
          <div class="BlockWrapper">
          <span>Nine</span>
        </div>
      </div>
    </div>`);
  }
  
  disconnectedCallback(): void {
    document.body.removeChild(document.getElementById('UniqueDropzone') as HTMLElement)
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.insertHTMLToDocument();
    const containers = document.querySelectorAll('#UniqueDropzone .BlockLayout');
    if (containers.length === 0) {
      return;
    }

    const droppable = new Droppable(containers, {

      draggable: '.Block--isDraggable',
      dropzone: '.BlockWrapper--isDropzone',
      mirror: {
        constrainDimensions: true,
      },
    });
    
    let droppableOrigin: string | undefined;

    // --- Draggable events --- //
    droppable.on('drag:start', (evt) => {
      if(!evt.originalSource.parentNode){
        return;
      }
      droppableOrigin = (evt.originalSource.parentNode as HTMLElement).dataset.dropzone;
    });

    droppable.on('droppable:dropped', (evt) => {
      if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
        evt.cancel();
      }
    });
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>LittleChef Playground</h2>
        <lc-drag-drop></app-lc-drag-drop>
      </main>
    `;
  }
}
