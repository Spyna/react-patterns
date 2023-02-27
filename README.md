# React patterns

> A sample React todo app. 😊

Questa applicazione di esempio si basa su delle idee che ho avuto recentemente su React, che ho scritto sostto forma di note qui: https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c

L'obiettivo di questo progetto è sviluppare una applicazione React con 3 livelli di separazione, basandosi sul pattern [Model view Presenter](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter). I tre livelli sono così divisi:
* 1° livello: esegue l'accesso ai dati e la business logic
* 3° livello: visualizzza l'interfaccia utente
* 2° livello: si occupa di comunicare i dati al livello di presentazione


Il progetto è stato sviluppato in maniera incrementale, partendo da un architettura mono-layer (in cui la business logic risiede nell'interfaccia grafica) ed aggiungendo in vari step più layer. 


Ogni branch contiene uno step, gli step finali includono anche la gestione del routing, dell'autenticazione e autorizzazione.

* [step-0](https://github.com/Spyna/react-patterns/tree/step-0): contiene solo l'applicazione vuota. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#1530532f82f74928a9a634cd05b6cbde)

* [step-1-monolayer](https://github.com/Spyna/react-patterns/tree/step-1-monolayer): l'applicazione sviluppata con un unico layer. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#e802d542b9884d5ca02b37a7a4c64179)

* [step-2-mobx-store](https://github.com/Spyna/react-patterns/tree/step-2-mobx-store): l'aggiunta del secondo livello per l'accesso ai dati per disaccoppiare la business logic dalla "view". [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#13fa31ef0b294a0ba470f226b48d1136)

* [step-3-inversify-ioc](https://github.com/Spyna/react-patterns/tree/step-3-inversify-ioc): aggiunta della dependency injection. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#2abc1c1a945e4354ab1f59b34f6882ab)

* [step-4-view-model-presenter](https://github.com/Spyna/react-patterns/tree/step-4-view-model-presenter): aggiunta del terzo layer. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#f34b0018ded5425fa308935669497652)

* [step-5-routing](https://github.com/Spyna/react-patterns/tree/step-5-routing): aggiunta della navigazione. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#a8f471a3bd274b3391b4696fd64925ad)

* [step-6-authentication](https://github.com/Spyna/react-patterns/tree/step-6-authentication): aggiunta dell'autenticazione. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#bd1e3b5a92b84c47a252a66a2568b28d)

* [step-7-authorization](https://github.com/Spyna/react-patterns/tree/step-7-authorization): aggiunta dell'autorizzazione. [Note](https://spyna.notion.site/React-patterns-a37c5ae1e7044dc39b032d293549a25c#01f971ee22704b91b6095e26266e54d2)

* [main branch](https://github.com/Spyna/react-patterns): la versione finale del progetto (in progress), dove le funzioni e gli hook per la dependency injection e il view-model-presenter layer sono state spostate in una libreria esterna, questa: https://github.com/Spyna/terso 

