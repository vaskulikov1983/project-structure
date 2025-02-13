import ProductForm from '../../../components/product-form/index.js';

export default class PageEdit {

  constructor(productID = window.location.pathname) {
    this.productID = productID[1];
    this.parsePath();
  }

  parsePath() {
    
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
    wrapper.remove();

    this.loadForm();
    return this.element;
  }

  loadForm() {
    const productForm = new ProductForm(this.productID);
    
    const renderForm = async () => {
      await productForm.render();
  
      productForm.element.addEventListener('product-saved', event => {
        console.error('product-saved', event.detail);
      });
  
      productForm.element.addEventListener('product-updated', event => {
        console.error('product-updated', event.detail);
      })
  
      this.element.querySelector('.content-box').append(productForm.element);
    };
  
    renderForm();
  }

  getTemplate() {
    return `
        <div class="products-edit">
            <div class="content__top-panel">
                <h1 class="page-title">
                  <a href="/products" class="link">Товары</a> / Редактировать
                </h1>
            </div>
            <div class="content-box"></div>
        </div>
    `;
  }
} 