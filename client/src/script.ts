import { result } from 'lodash';
import { div, get, a, img, span } from './utils';

interface info{
    count:number;
    next:string;
    pages:number;
    prev:null;
  }
  
  interface results {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gende: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: Array<string>;
    url: string;
    created: Date;
  }
  
  interface data{
    info:info,
    results:Array<results>,
  }

get().then((data:data):void => {
  const app = document.getElementById('app');
  let currSlide = 0;

  let cards:Array<any>, dots:any;

  const setActualSlide = (index:number):void => {
    cards.forEach((card:any) => card.classList.remove('active'));
    dots.forEach((dot:any) => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currSlide = index;
  };

  const wrapper = div({
    classNames: ['slideshow-container'],
    children: [
      a({
        classNames: ['prev'],
        listeners: {
          click: () => setActualSlide(!currSlide ? 0 : currSlide - 1),
        },
        children: ['❮'],
      }),
      a({
        classNames: ['next'],
        listeners: {
          click: () =>
            setActualSlide(
              currSlide === data.results.length - 1
                ? data.results.length - 1
                : currSlide + 1
            ),
        },
        children: ['❯'],
      }),
      ...(cards = data.results.map((user:any, i:any) =>
        div({
          classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
          children: [
            div({
              classNames: ['numbertext'],
              children: [`${i + 1}/${data.results.length}`],
            }),
            img({
              classNames: ['slider-image'],
              src: '',
            }),
            div({
              classNames: ['text'],
              children: [user.name],
            }),
          ],
        })
      )),
    ],
  });

  const dotsWrapper = div({
    classNames: ['dots-wrapper'],
    children: (dots = data.results.map((_, i:any) =>
      span({
        classNames: ['dot', !i ? 'active' : 'not-active'],
        listeners: {
          click: () => setActualSlide(i),
        },
      })
    )),
  });

  app?.append(wrapper);
  app?.append(dotsWrapper);
});