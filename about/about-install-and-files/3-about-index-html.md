### **1. Declaração do Tipo de Documento**
```html
<!DOCTYPE html>
```
- Define que o documento é um **HTML5**.  
- **Não precisa ser editado**, pois é um padrão essencial para navegadores modernos.  

---

### **2. Abertura da Tag `<html>`**
```html
<html lang="">
```
- Representa a raiz do documento HTML.  
- **Pode ser editado**:  
  - O atributo `lang` deve receber um valor apropriado, como `"pt-BR"` para português do Brasil ou `"en-US"` para inglês americano.  
  - Exemplo corrigido:  
    ```html
    <html lang="pt-BR">
    ```

---

### **3. Cabeçalho do Documento (`<head>`)**
#### **Meta Charset**
```html
<meta charset="utf-8">
```
- Define a **codificação de caracteres** como UTF-8, que suporta caracteres especiais (ç, á, ê, etc.).  
- **Não precisa ser editado**, a menos que precise de uma codificação diferente (não recomendado).  

#### **Compatibilidade com o Internet Explorer**
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
- Diz ao Internet Explorer para usar o **modo mais recente de renderização**.  
- **Não precisa ser editado**, pois ajuda na compatibilidade.  

#### **Configuração da Viewport**
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
- Controla a forma como o site se adapta a diferentes telas (responsividade).  
- **Pode ser editado**, mas só se precisar de um ajuste avançado.  
  - Exemplo:  
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    ```
  - Isso desabilita o zoom no mobile.  

#### **Favicon (Ícone do Site)**
```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
- Define o ícone da aba do navegador.  
- **Pode ser editado** trocando o caminho do arquivo.  
  - Exemplo:  
    ```html
    <link rel="icon" href="/assets/my-icon.png">
    ```
- O trecho `<%= BASE_URL %>` é uma variável dinâmica usada pelo Webpack para apontar para a pasta base do projeto.  

#### **Título da Página**
```html
<title><%= htmlWebpackPlugin.options.title %></title>
```
- Define o título da aba do navegador.  
- **Pode ser editado** diretamente ou via Webpack:  
  - Para definir um título fixo:  
    ```html
    <title>Meu Projeto Vue</title>
    ```
  - No Vue CLI, pode ser alterado no arquivo `vue.config.js`:  
    ```js
    module.exports = {
      chainWebpack: config => {
        config.plugin('html').tap(args => {
          args[0].title = "Meu Projeto Vue";
          return args;
        });
      }
    };
    ```

---

### **4. Corpo do Documento (`<body>`)**
#### **Aviso para JavaScript Desativado**
```html
<noscript>
  <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
```
- Exibe uma mensagem para usuários com **JavaScript desativado**.  
- **Pode ser editado** para uma mensagem personalizada.  
  - Exemplo:  
    ```html
    <noscript>
      <strong>Este site requer JavaScript para funcionar corretamente. Ative-o para continuar.</strong>
    </noscript>
    ```

#### **Div para Montar a Aplicação Vue**
```html
<div id="app"></div>
```
- Elemento onde o Vue **renderiza a aplicação**.  
- **Não deve ser editado** a menos que altere o `el` no `main.js`.  
  - Se mudar o `id`, precisa atualizar no Vue:  
    ```js
    new Vue({
      el: '#minhaApp',
      render: h => h(App),
    });
    ```
  - Então, no HTML:  
    ```html
    <div id="minhaApp"></div>
    ```

#### **Comentário para Injeção Automática dos Arquivos**
```html
<!-- built files will be auto injected -->
```
- Indica que os arquivos gerados pelo Vue CLI (JS e CSS) serão automaticamente injetados.  
- **Não precisa ser editado**, pois faz parte do Webpack.  

---

### **Resumo do que pode ser editado**
| Trecho | Editável? | O que pode ser alterado? |
|--------|----------|--------------------------|
| `<html lang="">` | ✅ | Definir `lang="pt-BR"` ou outro idioma |
| `<meta charset="utf-8">` | ❌ | Não recomendado alterar |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | ❌ | Melhor manter para compatibilidade |
| `<meta name="viewport" content="width=device-width,initial-scale=1.0">` | ✅ | Pode ajustar escala máxima e zoom |
| `<link rel="icon" href="<%= BASE_URL %>favicon.ico">` | ✅ | Pode trocar por outro ícone |
| `<title><%= htmlWebpackPlugin.options.title %></title>` | ✅ | Pode definir um título fixo |
| `<noscript>` | ✅ | Personalizar a mensagem exibida |
| `<div id="app"></div>` | ⚠️ | Só editar se mudar `el` no Vue |
| `<!-- built files will be auto injected -->` | ❌ | Não precisa alterar |
