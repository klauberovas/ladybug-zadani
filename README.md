# Beruska

Upravíme stav v Reactové hře, kde ovládáte berušku a chodíte s ní po rozkvetlé louce.

1. Udělejte fork repozitáře s naprogramovanou hrou.
2. Pomocí `npm install` a `npm run dev` hru spusťte a vyzkoušejte, že funguje.
3. Pozice a orientace berušky je v komponentě `App` reprezentována třemi stavy. Z toho dva z nich se vždy mění společně. Navíc musíme berušce vždy předávat tři prop. To je nešikovné.
4. Upravte komonentu `App` tak, aby používala jeden objektový stav `ladybugState`. Zachovejte immutabilitu stavu a měňte jej pomocí spreadů.
5. Upravte komponentu `Ladybug` tak, aby místo tří prop používala pouze jednu, ve které očekává celý objekt.
6. Vyzkoušejte, že vaše hra funguje.
