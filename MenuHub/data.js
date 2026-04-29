// =============================================
// MENUHUB - Sistema de Dados Central (localStorage)
// =============================================

const DB = {
  // ---- USUÁRIOS ----
  getUsers() {
    return JSON.parse(localStorage.getItem('mh_users') || '[]');
  },
  saveUsers(users) {
    localStorage.setItem('mh_users', JSON.stringify(users));
  },
  registerUser(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'E-mail já cadastrado.' };
    users.push({ id: Date.now(), name, email, password, createdAt: new Date().toISOString() });
    this.saveUsers(users);
    return { ok: true };
  },
  loginUser(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, msg: 'E-mail ou senha incorretos.' };
    localStorage.setItem('mh_session', JSON.stringify({ id: user.id, name: user.name, email: user.email }));
    return { ok: true, user };
  },
  getSession() {
    return JSON.parse(localStorage.getItem('mh_session') || 'null');
  },
  logout() {
    localStorage.removeItem('mh_session');
  },

  // ---- PRODUTOS ----
  getProducts() {
    const stored = localStorage.getItem('mh_products');
    if (stored) return JSON.parse(stored);
    // Produtos padrão
    const defaults = [
      { id: 1, name: 'Classic Burger', category: 'hamburguer', price: 28.90, desc: 'Pão brioche, carne 180g, queijo cheddar, alface, tomate e maionese especial.', img: 'hamb_1', discount: 0, featured: true },
      { id: 2, name: 'Double Smash', category: 'hamburguer', price: 36.90, desc: 'Dois smash patties, queijo americano duplo, cebola caramelizada e molho secreto.', img: 'hamb_2', discount: 15, featured: true },
      { id: 3, name: 'BBQ Bacon', category: 'hamburguer', price: 34.90, desc: 'Carne 200g, bacon crocante, cheddar derretido, cebola crispy e molho barbecue.', img: 'hamb_3', discount: 0, featured: false },
      { id: 4, name: 'Crispy Chicken', category: 'hamburguer', price: 32.90, desc: 'Frango empanado crocante, cheddar, alface americana e maionese de sriracha.', img: 'hamb_4', discount: 10, featured: false },
      { id: 5, name: 'Mushroom Swiss', category: 'hamburguer', price: 35.90, desc: 'Carne angus, cogumelos refogados, queijo suíço e molho de ervas finas.', img: 'hamb_5', discount: 0, featured: false },
      { id: 6, name: 'Spicy Jalapeño', category: 'hamburguer', price: 33.90, desc: 'Carne 180g, jalapeño fresco, pepper jack cheese e molho chipotle picante.', img: 'hamb_6', discount: 0, featured: false },
      { id: 7, name: 'Veggie Delight', category: 'hamburguer', price: 29.90, desc: 'Blend de grão-de-bico, beterraba, queijo coalho grelhado e pesto de manjericão.', img: 'hamb_7', discount: 0, featured: false },
      { id: 8, name: 'The Monster', category: 'hamburguer', price: 42.90, desc: 'Três carnes, três queijos, bacon duplo, ovo caipira e onion rings. Para os corajosos!', img: 'hamb_8', discount: 20, featured: true },
      { id: 9, name: 'Coca-Cola 350ml', category: 'bebida', price: 7.90, desc: 'Gelada, direto da geladeira.', img: 'refri_1', discount: 0, featured: false },
      { id: 10, name: 'Guaraná Antarctica 350ml', category: 'bebida', price: 7.90, desc: 'O clássico brasileiro bem gelado.', img: 'refri_2', discount: 0, featured: false },
    ];
    this.saveProducts(defaults);
    return defaults;
  },
  saveProducts(products) {
    localStorage.setItem('mh_products', JSON.stringify(products));
  },
  addProduct(product) {
    const products = this.getProducts();
    product.id = Date.now();
    products.push(product);
    this.saveProducts(products);
  },
  updateProduct(id, data) {
    const products = this.getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) { products[idx] = { ...products[idx], ...data }; this.saveProducts(products); }
  },
  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  },

  // ---- OFERTAS DA SEMANA ----
  getOffers() {
    return JSON.parse(localStorage.getItem('mh_offers') || '[]');
  },
  saveOffers(offers) {
    localStorage.setItem('mh_offers', JSON.stringify(offers));
  },

  // ---- PEDIDOS / HISTÓRICO ----
  getOrders() {
    return JSON.parse(localStorage.getItem('mh_orders') || '[]');
  },
  saveOrder(order) {
    const orders = this.getOrders();
    order.id = Date.now();
    order.date = new Date().toISOString();
    orders.unshift(order);
    localStorage.setItem('mh_orders', JSON.stringify(orders));
    return order.id;
  },
  getUserOrders(userId) {
    return this.getOrders().filter(o => o.userId === userId);
  },

  // ---- ADMIN ----
  checkAdmin(password) {
    const stored = localStorage.getItem('mh_admin_pass') || 'admin123';
    return password === stored;
  },
  setAdminPassword(newPass) {
    localStorage.setItem('mh_admin_pass', newPass);
  }
};

// Inicializar produtos se não existirem
DB.getProducts();
