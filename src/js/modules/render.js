export function binanceTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
    <img
        class="coin-logo"
        src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
      />
    <span class="coin-title">${obj.symbol}</span>
    <span class="coin-price">${obj.price}</span>`;
}

export function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${biography.fullName}</p>
      <p class="hero-bio">Publisher - ${biography.publisher}</p>
      <p class="hero-bio">Alignment - ${biography.alignment}</p>
      <p class="hero-bio">Gender - ${appearance.gender}</p>
      <p class="hero-bio">Race - ${appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${powerstats.power}</span>
      <span>Strength: ${powerstats.strength}</span>
      <span>Speed: ${powerstats.speed}</span>
      <span>Combat: ${powerstats.combat}</span>
    </div>
  </div>
</div>`;
}

export function ipTemplate({
  country,
  ip,
  city,
  country_flag,
  currency,
  timezone,
  completed_requests,
  currency_rates,
  latitude,
  longitude,
}) {
  return `
    <div class="info-item">
    <img
      class="flag"
      src="${country_flag}"
      alt="Flag of ${country}"
    />
    <span class="info-label">Country:</span>
    <span class="info-value">${country}</span>
  </div>
  <div class="info-item">
    <span class="info-label">IP Address: </span>
    <span class="info-value">${ip}</span>
  </div>
  <div class="info-item">
    <span class="info-label">City: </span> <span class="info-value">${city}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Timezone: </span>
    <span class="info-value">${timezone}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency:</span>
    <span class="info-value">${currency}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency Rate:</span>
    <span class="info-value">${currency_rates}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Completed Requests:</span>
    <span class="info-value">${completed_requests}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Google Maps:</span>
    <a href="https://www.google.com.ua/maps/@${latitude},${longitude},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
  </div>`;
}

export function pokemonTemplate({
  height,
  weight,
  id,
  name,
  base_experience,
  sprites: { front_default, back_default },
}) {
  return `<div class="pokemon-card pokemon-item">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`;
}

function instagramTemplate({ biography, full_name }) {
  return `<img
    class="profile-pic"
    src="https://source.unsplash.com/500x500/?random=1&user,userprofile,profile,avatar"
    alt="Profile Picture"
  />
  <div class="username">${full_name}</div>
  <div class="biography">${biography}</div>`;
}
