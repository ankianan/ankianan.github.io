import { LitElement, PropertyValues, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import { Droppable } from '@shopify/draggable';
import svg0 from './svg/burger-pieces/0.svg?inline';
import svg1 from './svg/burger-pieces/1.svg?inline';
import svg2 from './svg/burger-pieces/2.svg?inline';
import svg3 from './svg/burger-pieces/3.svg?inline';

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
      .BlockLayout.hoz {
        height: 8rem;
      }
      .BlockLayout.vert {
        width: 8rem;
      }
      .BlockWrapper img {
        width: 8rem;
        height: 8rem;
      }  
    </style>
    <div id="UniqueDropzone">
      <div class="BlockLayout hoz">
        ${[svg0, svg1, svg2, svg3].map((svg, index)=>{
          return `<div class="BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied" data-dropzone="${index}">
              <img src="${svg}" tabindex="0" class="Block--isDraggable">
            </div>`
        }).join('')}
      </div>
      <div class="BlockLayout vert">
        <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 512 512" xml:space="preserve">
        <g class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="0">
          <path style="fill:#F6A230;" d="M26.857,329.162v48.106c0,29.412,23.844,53.256,53.257,53.256h351.77
            c29.413,0,53.257-23.844,53.257-53.256v-48.106H26.857z"/>
          <path style="fill:#F6A230;" d="M110.678,233.374h374.549c0-83.892-68.008-151.899-151.899-151.899H178.672
            c-83.89,0-151.899,68.007-151.899,151.899h61.814"/>
        </g>
        <polygon class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="1" style="fill:#FFE285;" points="272.678,329.161 166.335,386.622 59.992,329.161 "/>
        <path class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="2" style="fill:#08AA6E;" d="M88.589,233.374H26.857c-8.155,0-14.765,6.61-14.765,14.764c0,8.155,6.61,14.766,14.765,14.766
          c38.188,0,38.188,18.331,76.376,18.331s38.187-18.331,76.376-18.331c38.19,0,38.19,18.331,76.38,18.331
          c0.032,0,0.063-0.002,0.095-0.002s0.063,0.002,0.095,0.002c38.19,0,38.19-18.331,76.38-18.331c38.188,0,38.188,18.331,76.376,18.331
          s38.187-18.331,76.376-18.331c8.155,0,14.765-6.611,14.765-14.766c0-8.154-6.61-14.764-14.765-14.764H256.084H110.678"/>
        <path class="BlockWrapper BlockWrapper--isDropzone" data-dropzone="3" style="fill:#D53349;" d="M476.614,263.268c-29.73,2.547-32.642,17.967-67.679,17.967c-38.187,0-38.187-18.331-76.376-18.331
          c-38.189,0-38.189,18.331-76.38,18.331c-0.032,0-0.063-0.002-0.095-0.002s-0.063,0.002-0.095,0.002
          c-38.189,0-38.189-18.331-76.38-18.331c-38.189,0-38.189,18.331-76.376,18.331c-35.081,0-37.957-15.459-67.794-17.976
          c-15.782,2.551-27.836,16.233-27.836,32.736c0,18.318,14.85,33.168,33.168,33.168h430.456c18.318,0,33.168-14.85,33.168-33.168
          C504.396,279.51,492.37,265.841,476.614,263.268z"/>
        <g>
          <path style="fill:#53180F;" d="M512,295.995c0-11.839-4.998-22.577-13.156-30.061c5.364-4.09,8.835-10.543,8.835-17.795
            c0-9.747-6.27-18.054-14.987-21.111c-3.344-85.019-73.54-153.157-159.364-153.157H178.672
            c-85.843,0-156.051,68.168-159.368,153.215c-8.628,3.105-14.816,11.368-14.816,21.053c0,7.208,3.43,13.626,8.741,17.72
            C5.027,273.344,0,284.112,0,295.995c0,14.588,7.705,27.402,19.253,34.609v46.665c0,33.559,27.302,60.86,60.861,60.86h351.77
            c33.559,0,60.861-27.302,60.861-60.86v-46.665C504.295,323.396,512,310.582,512,295.995z M178.672,89.078h154.656
            c77.014,0,140.131,60.645,144.096,136.691H110.678h-0.001v15.208h0.001h374.633c3.949,0,7.161,3.212,7.161,7.16
            c0,3.949-3.212,7.162-7.161,7.162c-2.997,0-5.783,0.113-8.397,0.313l-0.008-0.002l-0.174,0.015
            c-15.443,1.214-24.644,5.625-32.9,9.588c-9.409,4.516-17.534,8.416-34.896,8.416c-2.171,0-4.196-0.061-6.098-0.176
            c-13.316-0.808-20.566-4.289-28.798-8.24c-9.681-4.647-20.655-9.915-41.479-9.915c-3.905,0-7.463,0.186-10.732,0.517
            c-14.164,1.437-22.882,5.621-30.749,9.398c-2.277,1.093-4.48,2.148-6.757,3.123c-7.026,3.007-14.77,5.222-27.592,5.286
            c-0.179,0.001-0.346,0.007-0.527,0.007l-0.119-0.002l-0.198,0.002c-0.481-0.001-0.928-0.015-1.395-0.021
            c-0.583-0.008-1.18-0.009-1.743-0.026c-0.157-0.005-0.3-0.015-0.455-0.021c-6.855-0.239-12.18-1.14-16.769-2.456
            c-5.364-1.539-9.739-3.639-14.434-5.892c-9.681-4.647-20.654-9.915-41.481-9.915c-20.825,0-31.798,5.267-41.479,9.915
            c-8.233,3.951-15.483,7.432-28.798,8.24c-1.902,0.116-3.928,0.176-6.098,0.176c-17.363,0-25.489-3.9-34.896-8.416
            c-8.274-3.971-17.497-8.393-33.001-9.595l-0.188-0.016l-0.007,0.001c-2.581-0.195-5.329-0.304-8.282-0.304
            c-3.949,0-7.161-3.213-7.161-7.162c0-3.948,3.212-7.16,7.161-7.16h61.73h0.001v-15.208h-0.001H34.576
            C38.541,149.725,101.657,89.078,178.672,89.078z M242.607,336.766l-76.272,41.214l-76.273-41.213h152.545V336.766z
            M477.539,336.766v17.926H315.352V369.9h162.186v7.369c0,25.173-20.48,45.652-45.653,45.652H80.115
            c-25.173,0-45.653-20.48-45.653-45.652v-40.503h6.31H58.07l108.265,58.499l108.264-58.499h196.629H477.539z M471.228,321.558
            H302.744l0.002-0.001H40.733c-14.079-0.021-25.525-11.48-25.525-25.563c0-12.309,8.594-22.713,20.561-25.072
            c11.62,1.125,18.598,4.471,25.974,8.008c9.075,4.352,19.286,9.245,37.663,9.846c1.238,0.041,2.512,0.062,3.826,0.062
            c20.824,0,31.797-5.267,41.478-9.914c9.409-4.517,17.534-8.417,34.898-8.417c4.341,0,8.105,0.244,11.456,0.68
            c1.676,0.218,3.247,0.485,4.737,0.792c0.744,0.154,1.469,0.318,2.175,0.493c6.353,1.565,11.24,3.911,16.532,6.452
            c6.354,3.05,13.263,6.366,23.149,8.285c1.412,0.275,2.885,0.52,4.426,0.733c1.027,0.142,2.085,0.269,3.173,0.379
            c3.269,0.332,6.827,0.517,10.732,0.517h0.191c4.555,0,8.64-0.252,12.342-0.695c12.695-1.517,20.899-5.272,28.227-8.783
            c0.305-0.146,0.609-0.292,0.911-0.437c9.409-4.516,17.535-8.416,34.899-8.416c4.341,0,8.105,0.244,11.455,0.68
            c1.675,0.218,3.247,0.485,4.737,0.792c0.744,0.154,1.469,0.318,2.175,0.493c6.353,1.565,11.239,3.911,16.531,6.452
            c6.354,3.05,13.263,6.366,23.148,8.285c1.412,0.275,2.885,0.52,4.426,0.733c1.027,0.142,2.085,0.269,3.173,0.379
            c3.269,0.332,6.826,0.517,10.731,0.517c1.302,0,2.564-0.02,3.791-0.061c18.4-0.595,28.616-5.494,37.698-9.848
            c7.353-3.525,14.308-6.86,25.858-7.996c11.938,2.378,20.51,12.776,20.51,25.06C496.792,310.09,485.324,321.558,471.228,321.558z"/>
          <rect x="168.799" y="107.004" style="fill:#53180F;" width="23.749" height="15.208"/>
          <rect x="206.464" y="140.137" style="fill:#53180F;" width="23.749" height="15.208"/>
          <rect x="131.123" y="140.137" style="fill:#53180F;" width="23.749" height="15.208"/>
          <rect x="357.125" y="140.137" style="fill:#53180F;" width="23.749" height="15.208"/>
          <rect x="281.794" y="140.137" style="fill:#53180F;" width="23.749" height="15.208"/>
          <rect x="244.129" y="107.004" style="fill:#53180F;" width="23.75" height="15.208"/>
          <rect x="319.459" y="107.004" style="fill:#53180F;" width="23.749" height="15.208"/>
        </g>
        </svg>
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
