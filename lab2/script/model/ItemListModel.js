export default class ItemListModel {
   constructor() {
      this.items = [];
      this.onChangeCallback = null;
   }

   show(itemId) {
      const itemIndex = this.items.findIndex((item) => item.id === itemId);
      alert(this.items[itemIndex].url);
   }

   add(item) {
      item.onChangeCallback = this.onChangeCallback;
      this.items.push(item);
   }

   delete(itemId) {
      const itemIndex = this.items.findIndex((item) => item.id === itemId);
      this.items.splice(itemIndex, 1);
   }

   change(itemId) {
      const itemIndex = this.items.findIndex((item) => item.id === itemId);
      const newUrl = prompt("Enter new URL:", "");
      if (newUrl === null) return;
      this.items[itemIndex].url = newUrl;
   }

   setOnChangeCallback(onChangeCallback) {
      this.onChangeCallback = onChangeCallback;
   }

}