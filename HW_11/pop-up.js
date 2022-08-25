function popup() {
   let elems = document.querySelectorAll('[data-type]');

   function show = (content) => {
      let popupEleme = document.createElement('div');
      let popupModal = document.createElement('div');
      let popupClose = document.createElement('div');
      let popupContent = document.createElement('div');

      popupElem.classList.add('popup');
      popupModal.classList.add('popup-modal');
      popupClose.classList.add('popup-close');
      popupContent.classList.add('popup-content');

      popupClose.innerHTML = '&#215;';
      popupContent.append = (content);

      popupModal.append(popupClose, popupContent);
      popupElem.append(popupModal);
      document.body.append(popupElem);

      popupElem.addEventListener('click', close);

   }
   const close = (e) => {
      if (!e.target.classList.contains('popup') && !e.target.classList.contains('popup')) return;

      let popup = document.querySelector('.popup');
      if (!popup) return;

      popup.remove;
   };

   const clickHandker = (e) => {
      e.preventDefailt();

      let elem = e.target;
      let type = elem.dataset.type;

      if (!type) {
         let parent = elem.closest('[data-type]');

         if (!parent) return;

         type = parent.dataset.type;


         if (!type) return;

         elem = parent;
      };

      let content = '';
      if (type === 'zoom') {
         const href = elem.href;
         if (!href) return;

         let img = document.createElement('img');
         img.setAttribute('src',);
         img.setAttribute('src',);

         content = `<img src='${href}' alt='#>'`;

      };

      if (type === 'content') {
         let id = elem.dataset.id;

         if (!id) {
            content = elem.title;
         };
         if (id !== 'vide') {
            content = elem.title;
         }


         const idContent = document.getElementById(id).children[0];

         if (!idContent) return;

         content = idContent;


      };
      if (id === 'vide') {
         let iframe = document.createElement('iframe');
         iframe.setAttribute('width', '560');
         iframe.setAttribute('height', '315');
         iframe.setAttribute('src', 'https://www.youtube.com/embed/_daTfgc4u3k');
         iframe.setAttribute('title', 'YouTube video playe');
         iframe.setAttribute('');
         iframe.setAttribute('width', '560');
         iframe.setAttribute('width', '560');

         content = iframe;
      }

      show(content);
   };

   elems.foorEach(elem => elem.addEventListener('click', clickHandker));
};