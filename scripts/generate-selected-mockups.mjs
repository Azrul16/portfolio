import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

// Repository UI previews, pinned for reproducible portfolio presentation.
const projects = [
  { slug: 'mama-bus-koi', repo: 'Mama-Bus-Koi-AFlutterBusTrackingMobileApp', ref: '07d0f32781498d55b6a3b3f2e4c88542a1a4cf28', color: '#45cba2', background: '#f6f8f4', files: ['03_buses_home', '05_premium_live_tracking', '06_routes', '07_schedules', '08_chat', '10_admin_dashboard'] },
  { slug: 'rov-commander', repo: 'ROV-Commander-Flutter-App', ref: '4bab4956f0bd4b09640309fbada9af0d575aa776', color: '#45bce9', background: '#0e1628', files: ['03_live_dashboard', '04_control', '05_telemetry', '06_systems', '02_connection', '08_settings'] },
];
const svg = (body, width = 1440, height = 1080) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${body}</svg>`);
const background = color => `<defs><radialGradient id="glow"><stop stop-color="${color}" stop-opacity=".22"/><stop offset="1" stop-color="#12101c"/></radialGradient></defs><rect width="1440" height="1080" fill="#12101c"/><ellipse cx="720" cy="510" rx="800" ry="650" fill="url(#glow)"/>`;

async function phone(source, project) {
  const screen = await sharp(source).resize(360, 800).png().toBuffer();
  const mask = svg('<rect width="360" height="868" rx="44" fill="white"/>', 360, 868);
  const display = await sharp({ create: { width: 360, height: 868, channels: 4, background: project.background } })
    .composite([{ input: screen, left: 0, top: 48 }]).png().toBuffer();
  const clipped = await sharp(display).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const ink = project.slug === 'mama-bus-koi' ? '#18221e' : '#f2f6ff';
  const body = svg('<rect x="7" y="3" width="382" height="894" rx="57" fill="#777783"/><rect x="10" y="5" width="376" height="890" rx="55" fill="#090a0e" stroke="#b3b3bb"/><rect x="2" y="150" width="5" height="31" rx="2" fill="#878791"/><rect x="2" y="202" width="5" height="65" rx="2" fill="#878791"/><rect x="389" y="215" width="5" height="91" rx="2" fill="#878791"/>', 396, 900);
  const hardware = svg(`<rect x="144" y="28" width="108" height="29" rx="15" fill="#030407"/><circle cx="235" cy="42" r="5" fill="#142034"/><text x="43" y="48" font-family="Arial" font-weight="bold" font-size="13" fill="${ink}">9:41</text><path d="M310 39h3v8h-3zm5-3h3v11h-3zm5-3h3v14h-3z" fill="${ink}"/><rect x="332" y="35" width="20" height="10" rx="3" fill="none" stroke="${ink}"/><rect x="334" y="37" width="15" height="6" rx="1" fill="${ink}"/><rect x="151" y="872" width="94" height="5" rx="3" fill="${ink}"/>`, 396, 900);
  return sharp(body).composite([{ input: clipped, left: 18, top: 16 }, { input: hardware }]).png().toBuffer();
}

for (const project of projects) {
  const directory = new URL(`../src/assets/images/projects/${project.slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  const frames = [];
  for (const file of project.files) {
    const response = await fetch(`https://raw.githubusercontent.com/Azrul16/${project.repo}/${project.ref}/mockups/${file}.png`);
    if (!response.ok) throw new Error(`${file}: ${response.status}`);
    const frame = await phone(Buffer.from(await response.arrayBuffer()), project);
    frames.push(frame);
    await writeFile(new URL(`${file}.webp`, directory), await sharp(frame).webp({ quality: 88 }).toBuffer());
  }
  const layers = await Promise.all(frames.slice(0, 3).map(async (frame, index) => ({ input: await sharp(frame).resize(index === 1 ? 396 : 350).png().toBuffer(), left: [120, 522, 970][index], top: index === 1 ? 62 : 140 })));
  await writeFile(new URL('ios-showcase.webp', directory), await sharp(svg(background(project.color))).composite(layers).webp({ quality: 88 }).toBuffer());
  console.log(`${project.slug}: ${frames.length} iPhone presentation mockups`);
}

// Native vector artwork illustrates real routes; sample responses are not live data.
const text = (x, y, value, size = 20, fill = '#c5c0d7', extra = '') => `<text x="${x}" y="${y}" ${extra.includes('font-family') ? '' : 'font-family="Segoe UI, Arial, sans-serif"'} font-size="${size}" fill="${fill}" ${extra}>${value}</text>`;
const endpoints = [['POST', '/auth/token/', '#d8adff'], ['GET', '/organizations/', '#7ee2bb'], ['GET', '/inventory/', '#7ee2bb'], ['POST', '/sales/', '#d8adff'], ['POST', '/sales/1/complete/', '#d8adff'], ['GET', '/dashboard/summary/', '#7ee2bb']];
const art = `${background('#a58ae9')}<rect x="82" y="120" width="1276" height="842" rx="22" fill="#151322" stroke="#51425f"/><path d="M82 184H1358" stroke="#3c334d"/><circle cx="113" cy="152" r="6" fill="#ff817f"/><circle cx="135" cy="152" r="6" fill="#eac674"/><circle cx="157" cy="152" r="6" fill="#7bd3aa"/>${text(560,159,'Syncora / API workspace',18)}${text(124,239,'S Y N C O R A',26,'#f5efff','font-weight="700"')}${text(124,277,'Multi-tenant business management',18)}<rect x="1093" y="218" width="224" height="38" rx="19" fill="#223c35"/>${text(1113,244,'REST + WebSockets',17,'#96e6c2')}<path d="M448 308V916" stroke="#3c334d"/>${text(124,333,'API / v1',15,'#a28ebc')}${endpoints.map(([method,path,color],i)=>text(124,392+i*65,method,15,color)+text(188,392+i*65,path,14)).join('')}${text(489,338,'REQUEST',14,'#a28ebc')}<rect x="484" y="361" width="830" height="65" rx="10" fill="#242033"/>${text(507,401,'GET',19,'#7ee2bb')}${text(570,401,'/api/v1/dashboard/summary/?organization=1',20,'#f3edff')}${text(491,473,'Authorization',17)}${text(680,473,'Bearer ••••••••••••••••',17,'#bca1e9')}<path d="M485 500H1314" stroke="#3c334d"/>${text(491,548,'RESPONSE PREVIEW',14,'#a28ebc')}${text(1134,548,'200 OK',18,'#7ee2bb')}<rect x="484" y="571" width="830" height="240" rx="12" fill="#0e0c17"/>${['{','  "organization": 1,','  "revenue": "125000.00",','  "profit": "28400.00",','  "inventory_risk": [ … ]','}'].map((line,i)=>text(511,606+i*34,line.replaceAll('&','&amp;'),20,i===0||i===5?'#eae4f6':'#adcfed','font-family="monospace"')).join('')}${text(491,858,'Tenant isolation',17,'#cdb5ef')}${text(730,858,'Role-based access',17,'#cdb5ef')}${text(1000,858,'Real-time events',17,'#cdb5ef')}${text(491,910,'Illustrative API explorer · sample response',15,'#93879f')}`;
const directory = new URL('../src/assets/images/projects/syncora/', import.meta.url);
await mkdir(directory, { recursive: true });
await writeFile(new URL('api-workspace.svg', directory), svg(art));
console.log('syncora: API explorer illustration');
