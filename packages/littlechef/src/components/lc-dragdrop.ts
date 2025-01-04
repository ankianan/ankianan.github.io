import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import { Droppable } from '@shopify/draggable';
@customElement('app-lc-drag-drop')
export class DragDrop extends LitElement {
  @property({ type: String }) title = 'DragDrop';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;

  connectedCallback(): void {
    document.body.insertAdjacentHTML('beforeend', `<div id="UniqueDropzone">
      <div class="BlockLayout">
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="1">
          <span tabindex="0" class="Block--isDraggable">One</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="2">
          <span tabindex="0" class="Block--isDraggable">Two</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="4">
          <span tabindex="0" class="Block--isDraggable">Three</span>
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="8">
          <span tabindex="0" class="Block--isDraggable">Four</span>
        </div>
      </div>
      <div class="BlockLayout">
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="1">
          One
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="2">
          Two
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="4">
          Three
        </div>
        <div class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="8">
          Four
        </div>
      </div>
    </div>`)
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
  disconnectedCallback(): void {
    document.body.removeChild(document.getElementById('UniqueDropzone') as Node);
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      
      
    `;
  }
}
