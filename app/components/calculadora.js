// app/components/calculadora.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalculadoraComponent extends Component {
  // @tracked propiedades para detectar cambios y actualizar la interfaz de usuario
  @tracked numero1 = "";
  @tracked numero2 = "";
  @tracked resultado = 0;

  // @action maneja eventos de usuario
  @action
  updateNumero1(event) {
    this.numero1 = event.target.value;
  }

  @action
  updateNumero2(event) {
    this.numero2 = event.target.value;
  }
  @action
  suma() {
    console.log('Valor:', this.numero1);
    console.log('Valor:', this.numero2);
    this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
    console.log('Resultado:', this.resultado);
  }

  @action
  resta() {
    this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
    
  }

  @action
  multiplicacion() {
    this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
    
  }

  @action
  division() {
    if (parseFloat(this.numero2) == 0) {
      alert('Error: División por cero');
    } else {
      this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
    }
  }
}
