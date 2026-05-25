LEARN('cloud', {
  intro: 'A vendor-comparative tour of cloud computing — what IaaS, PaaS, SaaS, and FaaS really mean, and what each of AWS, Azure, and GCP calls the same thing.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'cld-c1',
      title: 'What is cloud computing?',
      icon: '☁️',
      sections: [
        { type: 'heading', text: 'Renting computers, not owning them', level: 1 },
        { type: 'para', html: '<strong>Cloud computing</strong> is the on-demand delivery of compute, storage, networking, databases, and higher-level services over the internet, billed by usage. Instead of buying hardware and racking it in your own datacenter, you rent capacity from a provider and pay for exactly what you use.' },
        { type: 'para', html: 'The economic shift is from <strong>CapEx</strong> (big up-front purchases that depreciate over years) to <strong>OpEx</strong> (per-second/per-request running costs). The operational shift is from "we are a hardware shop too" to "we just write software."' },

        { type: 'heading', text: 'On-prem vs cloud — side by side', level: 2 },
        { type: 'image', alt: 'On-prem vs cloud comparison',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.bx{fill:#f1f5f9;stroke:#475569;stroke-width:2}.cl{fill:#fff7ed;stroke:#c2410c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:12px;fill:#475569}</style></defs>
<rect x="40" y="40" width="320" height="220" rx="10" class="bx"/>
<text x="200" y="68" class="tb">On-premises</text>
<text x="60" y="105" class="t">- Buy hardware (CapEx, 3-5 yr cycle)</text>
<text x="60" y="130" class="t">- Rack, cool, power, maintain</text>
<text x="60" y="155" class="t">- Capacity planning months ahead</text>
<text x="60" y="180" class="t">- Over-provision "just in case"</text>
<text x="60" y="205" class="t">- Patch + replace = your problem</text>
<text x="60" y="235" class="lab">CONTROL: high · SPEED: low</text>

<rect x="440" y="40" width="320" height="220" rx="10" class="cl"/>
<text x="600" y="68" class="tb">Cloud</text>
<text x="460" y="105" class="t">- Rent capacity (OpEx, per-second)</text>
<text x="460" y="130" class="t">- Provider runs the metal</text>
<text x="460" y="155" class="t">- Scale up &amp; down in minutes</text>
<text x="460" y="180" class="t">- Pay only for what you use</text>
<text x="460" y="205" class="t">- Managed services for ~everything</text>
<text x="460" y="235" class="lab">CONTROL: lower · SPEED: very high</text>
</svg>` },

        { type: 'heading', text: 'The five NIST characteristics', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>On-demand self-service</strong> — provision via API/console without filing a ticket',
          '<strong>Broad network access</strong> — reachable over the internet, from any device',
          '<strong>Resource pooling</strong> — multi-tenant infrastructure under the hood',
          '<strong>Rapid elasticity</strong> — scale out and back in to match real demand',
          '<strong>Measured service</strong> — usage is metered and billed transparently'
        ] },

        { type: 'callout', kind: 'tip', html: 'Cloud isn\'t magic. Under every "serverless" function there\'s still a server somewhere — you just don\'t own it, see it, or have to patch it.' },

        { type: 'heading', text: 'Public, private, hybrid, multi-cloud', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Public cloud</strong> — shared infra from AWS / Azure / GCP / Oracle / etc.',
          '<strong>Private cloud</strong> — cloud-style automation, but on hardware only you can use (OpenStack, VMware Cloud)',
          '<strong>Hybrid</strong> — workloads split or moved between on-prem and public cloud',
          '<strong>Multi-cloud</strong> — using more than one public cloud, often for resilience or sourcing leverage'
        ] }
      ]
    },

    /* ============ Chapter 2 — IaaS / PaaS / SaaS / FaaS ============ */
    {
      id: 'cld-c2',
      title: 'IaaS · PaaS · SaaS · FaaS',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'The four service models', level: 1 },
        { type: 'para', html: 'Cloud services come in layers. The higher up the stack you go, the less infrastructure you manage and the less control you keep. Picking the right layer for a workload is one of the more consequential decisions in a cloud architecture.' },

        { type: 'image', alt: 'Responsibility split across IaaS/PaaS/SaaS/On-prem',
          svg: `<svg viewBox="0 0 880 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.you{fill:#fed7aa;stroke:#c2410c;stroke-width:1.5}.them{fill:#bae6fd;stroke:#0369a1;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style></defs>
<text x="100" y="25" class="tb">On-prem</text>
<text x="300" y="25" class="tb">IaaS</text>
<text x="500" y="25" class="tb">PaaS</text>
<text x="700" y="25" class="tb">SaaS</text>

<g>
  <rect x="30" y="40"  width="140" height="30" class="you"/><text x="100" y="60" class="t">App</text>
  <rect x="30" y="70"  width="140" height="30" class="you"/><text x="100" y="90" class="t">Data</text>
  <rect x="30" y="100" width="140" height="30" class="you"/><text x="100" y="120" class="t">Runtime</text>
  <rect x="30" y="130" width="140" height="30" class="you"/><text x="100" y="150" class="t">Middleware</text>
  <rect x="30" y="160" width="140" height="30" class="you"/><text x="100" y="180" class="t">OS</text>
  <rect x="30" y="190" width="140" height="30" class="you"/><text x="100" y="210" class="t">Virtualization</text>
  <rect x="30" y="220" width="140" height="30" class="you"/><text x="100" y="240" class="t">Servers</text>
  <rect x="30" y="250" width="140" height="30" class="you"/><text x="100" y="270" class="t">Storage</text>
  <rect x="30" y="280" width="140" height="30" class="you"/><text x="100" y="300" class="t">Network</text>
</g>

<g>
  <rect x="230" y="40"  width="140" height="30" class="you"/><text x="300" y="60" class="t">App</text>
  <rect x="230" y="70"  width="140" height="30" class="you"/><text x="300" y="90" class="t">Data</text>
  <rect x="230" y="100" width="140" height="30" class="you"/><text x="300" y="120" class="t">Runtime</text>
  <rect x="230" y="130" width="140" height="30" class="you"/><text x="300" y="150" class="t">Middleware</text>
  <rect x="230" y="160" width="140" height="30" class="you"/><text x="300" y="180" class="t">OS</text>
  <rect x="230" y="190" width="140" height="30" class="them"/><text x="300" y="210" class="t">Virtualization</text>
  <rect x="230" y="220" width="140" height="30" class="them"/><text x="300" y="240" class="t">Servers</text>
  <rect x="230" y="250" width="140" height="30" class="them"/><text x="300" y="270" class="t">Storage</text>
  <rect x="230" y="280" width="140" height="30" class="them"/><text x="300" y="300" class="t">Network</text>
</g>

<g>
  <rect x="430" y="40"  width="140" height="30" class="you"/><text x="500" y="60" class="t">App</text>
  <rect x="430" y="70"  width="140" height="30" class="you"/><text x="500" y="90" class="t">Data</text>
  <rect x="430" y="100" width="140" height="30" class="them"/><text x="500" y="120" class="t">Runtime</text>
  <rect x="430" y="130" width="140" height="30" class="them"/><text x="500" y="150" class="t">Middleware</text>
  <rect x="430" y="160" width="140" height="30" class="them"/><text x="500" y="180" class="t">OS</text>
  <rect x="430" y="190" width="140" height="30" class="them"/><text x="500" y="210" class="t">Virtualization</text>
  <rect x="430" y="220" width="140" height="30" class="them"/><text x="500" y="240" class="t">Servers</text>
  <rect x="430" y="250" width="140" height="30" class="them"/><text x="500" y="270" class="t">Storage</text>
  <rect x="430" y="280" width="140" height="30" class="them"/><text x="500" y="300" class="t">Network</text>
</g>

<g>
  <rect x="630" y="40"  width="140" height="30" class="them"/><text x="700" y="60" class="t">App</text>
  <rect x="630" y="70"  width="140" height="30" class="them"/><text x="700" y="90" class="t">Data</text>
  <rect x="630" y="100" width="140" height="30" class="them"/><text x="700" y="120" class="t">Runtime</text>
  <rect x="630" y="130" width="140" height="30" class="them"/><text x="700" y="150" class="t">Middleware</text>
  <rect x="630" y="160" width="140" height="30" class="them"/><text x="700" y="180" class="t">OS</text>
  <rect x="630" y="190" width="140" height="30" class="them"/><text x="700" y="210" class="t">Virtualization</text>
  <rect x="630" y="220" width="140" height="30" class="them"/><text x="700" y="240" class="t">Servers</text>
  <rect x="630" y="250" width="140" height="30" class="them"/><text x="700" y="270" class="t">Storage</text>
  <rect x="630" y="280" width="140" height="30" class="them"/><text x="700" y="300" class="t">Network</text>
</g>

<rect x="820" y="40" width="20" height="20" class="you"/>
<text x="830" y="80" class="lab">You</text>
<rect x="820" y="100" width="20" height="20" class="them"/>
<text x="830" y="140" class="lab">Provider</text>
</svg>` },

        { type: 'heading', text: 'IaaS — raw virtual machines', level: 2 },
        { type: 'para', html: 'You get a VM with an OS. You install runtimes, your app, and everything else. You\'re responsible for patching and config. Maximum flexibility, maximum work.' },
        { type: 'list', kind: 'bullet', items: [
          'AWS: <strong>EC2</strong>',
          'Azure: <strong>Virtual Machines</strong>',
          'GCP: <strong>Compute Engine (GCE)</strong>'
        ] },

        { type: 'heading', text: 'PaaS — bring code, not servers', level: 2 },
        { type: 'para', html: 'You push code; the platform provides the runtime, scaling, patching, and load balancing. Great for boring CRUD apps and APIs where you don\'t need OS-level control.' },
        { type: 'list', kind: 'bullet', items: [
          'AWS: <strong>Elastic Beanstalk</strong>, <strong>App Runner</strong>',
          'Azure: <strong>App Service</strong>',
          'GCP: <strong>App Engine</strong>, <strong>Cloud Run</strong>'
        ] },

        { type: 'heading', text: 'SaaS — finished applications', level: 2 },
        { type: 'para', html: 'Sign in, use the app. You own only your data and user accounts. Everything else is the provider\'s problem.' },
        { type: 'list', kind: 'bullet', items: [
          'Gmail, Office 365, Salesforce, Notion, Slack, Figma, GitHub'
        ] },

        { type: 'heading', text: 'FaaS — functions on demand (serverless)', level: 2 },
        { type: 'para', html: 'You upload a single function. The platform runs it when an event triggers it (HTTP call, file upload, scheduled tick, queue message). Bills by milliseconds of execution; scales to zero.' },
        { type: 'list', kind: 'bullet', items: [
          'AWS: <strong>Lambda</strong>',
          'Azure: <strong>Functions</strong>',
          'GCP: <strong>Cloud Functions</strong> / <strong>Cloud Run Functions</strong>'
        ] },

        { type: 'callout', kind: 'info', html: 'There\'s also "DBaaS" (databases), "CaaS" (containers), "MLaaS" (ML platforms), and a long tail of *aaS marketing terms. They\'re all the same idea: the boundary of "what the provider manages" creeping up the stack.' }
      ]
    },

    /* ============ Chapter 3 — The big three ============ */
    {
      id: 'cld-c3',
      title: 'AWS · Azure · GCP — the big three',
      icon: '🏆',
      sections: [
        { type: 'heading', text: 'The market in two numbers', level: 1 },
        { type: 'para', html: 'Three providers dominate the global public-cloud market: <strong>AWS</strong> (around 32%), <strong>Microsoft Azure</strong> (around 23%), and <strong>Google Cloud Platform</strong> (around 11%). Together they account for roughly two-thirds of all cloud spend. The remaining slice is split between Alibaba, Oracle, IBM, and dozens of niche providers.' },

        { type: 'heading', text: 'AWS — the widest catalog', level: 2 },
        { type: 'para', html: 'AWS launched EC2 and S3 in 2006 and has had a multi-year head start. Its catalog is the broadest — well over 200 services. It tends to be the default for startups, data platforms, and anywhere maximum service variety matters.' },

        { type: 'heading', text: 'Azure — the enterprise/Microsoft fit', level: 2 },
        { type: 'para', html: 'Azure inherits Microsoft\'s enterprise relationships. If you live in Active Directory, Office 365, Windows Server, .NET, or SQL Server, Azure has the smoothest path. It\'s also strong in government and regulated industries.' },

        { type: 'heading', text: 'GCP — data and ML', level: 2 },
        { type: 'para', html: 'GCP\'s sweet spot is data analytics and machine learning — BigQuery, Dataflow, Vertex AI, TensorFlow are first-class. Google also invented Kubernetes; GKE is widely regarded as the cleanest managed-Kubernetes experience.' },

        { type: 'heading', text: 'Same primitives, different names', level: 2 },
        { type: 'image', alt: 'Service equivalents across AWS, Azure, GCP',
          svg: `<svg viewBox="0 0 880 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.h{fill:#1e293b;font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#fff;text-anchor:middle}.hb{fill:#1e293b}.r{fill:#fef3c7;stroke:#92400e;stroke-width:1}.r2{fill:#f1f5f9;stroke:#475569;stroke-width:1}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}</style></defs>
<rect x="20" y="20" width="220" height="36" class="hb"/><text x="130" y="44" class="h">Category</text>
<rect x="240" y="20" width="200" height="36" class="hb"/><text x="340" y="44" class="h">AWS</text>
<rect x="440" y="20" width="200" height="36" class="hb"/><text x="540" y="44" class="h">Azure</text>
<rect x="640" y="20" width="220" height="36" class="hb"/><text x="750" y="44" class="h">GCP</text>

<rect x="20" y="56"  width="220" height="36" class="r"/><text x="130" y="80" class="t">Virtual machines</text>
<rect x="240" y="56" width="200" height="36" class="r2"/><text x="340" y="80" class="t">EC2</text>
<rect x="440" y="56" width="200" height="36" class="r2"/><text x="540" y="80" class="t">Virtual Machines</text>
<rect x="640" y="56" width="220" height="36" class="r2"/><text x="750" y="80" class="t">Compute Engine</text>

<rect x="20" y="92"  width="220" height="36" class="r"/><text x="130" y="116" class="t">Object storage</text>
<rect x="240" y="92" width="200" height="36" class="r2"/><text x="340" y="116" class="t">S3</text>
<rect x="440" y="92" width="200" height="36" class="r2"/><text x="540" y="116" class="t">Blob Storage</text>
<rect x="640" y="92" width="220" height="36" class="r2"/><text x="750" y="116" class="t">Cloud Storage (GCS)</text>

<rect x="20" y="128"  width="220" height="36" class="r"/><text x="130" y="152" class="t">Managed SQL</text>
<rect x="240" y="128" width="200" height="36" class="r2"/><text x="340" y="152" class="t">RDS / Aurora</text>
<rect x="440" y="128" width="200" height="36" class="r2"/><text x="540" y="152" class="t">Azure SQL Database</text>
<rect x="640" y="128" width="220" height="36" class="r2"/><text x="750" y="152" class="t">Cloud SQL / AlloyDB</text>

<rect x="20" y="164"  width="220" height="36" class="r"/><text x="130" y="188" class="t">Managed NoSQL</text>
<rect x="240" y="164" width="200" height="36" class="r2"/><text x="340" y="188" class="t">DynamoDB</text>
<rect x="440" y="164" width="200" height="36" class="r2"/><text x="540" y="188" class="t">Cosmos DB</text>
<rect x="640" y="164" width="220" height="36" class="r2"/><text x="750" y="188" class="t">Firestore / Bigtable</text>

<rect x="20" y="200"  width="220" height="36" class="r"/><text x="130" y="224" class="t">Serverless functions</text>
<rect x="240" y="200" width="200" height="36" class="r2"/><text x="340" y="224" class="t">Lambda</text>
<rect x="440" y="200" width="200" height="36" class="r2"/><text x="540" y="224" class="t">Functions</text>
<rect x="640" y="200" width="220" height="36" class="r2"/><text x="750" y="224" class="t">Cloud Functions</text>

<rect x="20" y="236"  width="220" height="36" class="r"/><text x="130" y="260" class="t">Managed Kubernetes</text>
<rect x="240" y="236" width="200" height="36" class="r2"/><text x="340" y="260" class="t">EKS</text>
<rect x="440" y="236" width="200" height="36" class="r2"/><text x="540" y="260" class="t">AKS</text>
<rect x="640" y="236" width="220" height="36" class="r2"/><text x="750" y="260" class="t">GKE</text>

<rect x="20" y="272"  width="220" height="36" class="r"/><text x="130" y="296" class="t">Identity</text>
<rect x="240" y="272" width="200" height="36" class="r2"/><text x="340" y="296" class="t">IAM</text>
<rect x="440" y="272" width="200" height="36" class="r2"/><text x="540" y="296" class="t">Entra ID + RBAC</text>
<rect x="640" y="272" width="220" height="36" class="r2"/><text x="750" y="296" class="t">Cloud IAM</text>

<rect x="20" y="308"  width="220" height="36" class="r"/><text x="130" y="332" class="t">Pub/Sub messaging</text>
<rect x="240" y="308" width="200" height="36" class="r2"/><text x="340" y="332" class="t">SNS / EventBridge</text>
<rect x="440" y="308" width="200" height="36" class="r2"/><text x="540" y="332" class="t">Event Grid</text>
<rect x="640" y="308" width="220" height="36" class="r2"/><text x="750" y="332" class="t">Pub/Sub</text>
</svg>` },

        { type: 'heading', text: 'Picking one — a rough heuristic', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Big Microsoft shop? <strong>Azure</strong>.',
          'Data &amp; ML-heavy product? <strong>GCP</strong>.',
          'Need the widest set of mature services and the biggest hiring pool? <strong>AWS</strong>.',
          'In practice, most large orgs end up on more than one.'
        ] },

        { type: 'callout', kind: 'tip', html: 'When you learn one cloud well, the second one is 10x faster to pick up. The mental model is the same — only the names and the JSON schemas change.' }
      ]
    },

    /* ============ Chapter 4 — Regions/AZs ============ */
    {
      id: 'cld-c4',
      title: 'Regions, AZs, and edges',
      icon: '🌍',
      sections: [
        { type: 'heading', text: 'Geography is a feature, not a footnote', level: 1 },
        { type: 'para', html: 'Every public cloud is divided into <strong>regions</strong> — large geographic areas like "us-east-1" (Virginia), "westeurope" (Netherlands), or "asia-south1" (Mumbai). Each region contains multiple <strong>Availability Zones</strong> — physically separated datacenters with independent power, cooling, and networking. Edges and points-of-presence sit closer to end-users for CDN-style caching.' },

        { type: 'image', alt: 'Region containing AZs and edges',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.reg{fill:#e0e7ff;stroke:#3730a3;stroke-width:2}.az{fill:#fef3c7;stroke:#b45309;stroke-width:2}.edge{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}</style></defs>
<rect x="40" y="40" width="500" height="240" rx="14" class="reg"/>
<text x="290" y="65" class="tb">Region · us-east-1</text>

<rect x="80" y="100" width="120" height="120" rx="10" class="az"/>
<text x="140" y="125" class="tb">AZ-1a</text>
<text x="140" y="150" class="t">datacenter A</text>
<text x="140" y="170" class="t">power · net</text>
<text x="140" y="190" class="t">independent</text>

<rect x="230" y="100" width="120" height="120" rx="10" class="az"/>
<text x="290" y="125" class="tb">AZ-1b</text>
<text x="290" y="150" class="t">datacenter B</text>
<text x="290" y="170" class="t">power · net</text>
<text x="290" y="190" class="t">independent</text>

<rect x="380" y="100" width="120" height="120" rx="10" class="az"/>
<text x="440" y="125" class="tb">AZ-1c</text>
<text x="440" y="150" class="t">datacenter C</text>
<text x="440" y="170" class="t">power · net</text>
<text x="440" y="190" class="t">independent</text>

<text x="290" y="255" class="t">≤ 2 ms between AZs · 60+ Gbps backbone</text>

<rect x="600" y="80" width="180" height="60" rx="10" class="edge"/>
<text x="690" y="105" class="tb">Edge / PoP</text>
<text x="690" y="125" class="t">CDN, DNS, WAF</text>
<rect x="600" y="160" width="180" height="60" rx="10" class="edge"/>
<text x="690" y="185" class="tb">Edge / PoP</text>
<text x="690" y="205" class="t">closer to users</text>
<rect x="600" y="240" width="180" height="40" rx="10" class="edge"/>
<text x="690" y="265" class="tb">... 100s globally</text>
</svg>` },

        { type: 'heading', text: 'How many of each?', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>AWS</strong> — ~30 regions, 90+ AZs, 400+ edge locations',
          '<strong>Azure</strong> — 60+ regions (most have 3 AZs), 175+ edge nodes',
          '<strong>GCP</strong> — 40+ regions, 120+ zones, 180+ edge PoPs'
        ] },

        { type: 'heading', text: 'Latency expectations', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Same AZ: <strong>&lt; 1 ms</strong>',
          'Cross-AZ (within region): <strong>1–2 ms</strong>',
          'Cross-region same continent: <strong>20–80 ms</strong>',
          'Cross-region intercontinental: <strong>100–300 ms</strong>'
        ] },

        { type: 'callout', kind: 'warn', html: 'Pick the region nearest your users (not nearest you). And mind data-residency law — GDPR, India\'s DPDP, and similar regimes pin certain data to specific regions.' },

        { type: 'heading', text: 'AZ vs zone (terminology)', level: 2 },
        { type: 'para', html: 'AWS and Azure say <strong>Availability Zone</strong>; GCP says <strong>zone</strong>. Same idea: an isolated failure domain inside a region. AWS subnets are AZ-scoped; GCP subnets are <em>regional</em> (they span all zones in a region). Small but real difference when you write IaC.' }
      ]
    },

    /* ============ Chapter 5 — Compute ============ */
    {
      id: 'cld-c5',
      title: 'Compute: VMs, instance families, autoscaling',
      icon: '🖥️',
      sections: [
        { type: 'heading', text: 'Virtual machines are the workhorse', level: 1 },
        { type: 'para', html: 'Cloud compute starts with the virtual machine. Even managed services like RDS, Lambda, and ECS run on VMs underneath — the provider just hides them. Knowing how VMs work is foundational.' },

        { type: 'heading', text: 'Instance families — pick the shape', level: 2 },
        { type: 'para', html: 'Each cloud groups VMs into families optimized for different workload shapes. Names differ but the categories are nearly identical:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>General purpose</strong> — balanced CPU:RAM (AWS m-series, Azure D-series, GCP n2)',
          '<strong>Compute optimized</strong> — high CPU per dollar (AWS c-series, Azure F-series, GCP c2)',
          '<strong>Memory optimized</strong> — fat RAM (AWS r/x-series, Azure E/M-series, GCP m2)',
          '<strong>Storage optimized</strong> — fast local NVMe (AWS i-series, Azure L-series, GCP n2 + local SSD)',
          '<strong>Accelerated / GPU</strong> — ML training/inference (AWS p/g-series, Azure NC/ND, GCP a3)',
          '<strong>Burstable</strong> — cheap baseline + credits (AWS t-series, Azure B-series, GCP e2)'
        ] },

        { type: 'code', lang: 'bash', code: `<span class="com"># AWS — launch an EC2 instance via CLI</span>
aws ec2 run-instances \\
  --image-id ami-0abcd1234 \\
  --instance-type m6i.large \\
  --subnet-id subnet-0abc \\
  --key-name my-keypair

<span class="com"># Azure</span>
az vm create \\
  --resource-group rg-prod \\
  --name web-01 \\
  --image Ubuntu2204 \\
  --size Standard_D2s_v5

<span class="com"># GCP</span>
gcloud compute instances create web-01 \\
  --machine-type=n2-standard-2 \\
  --image-family=debian-12 \\
  --zone=us-central1-a` },

        { type: 'heading', text: 'Autoscaling', level: 2 },
        { type: 'para', html: 'Static fleets waste money. Autoscaling groups (ASGs on AWS, Scale Sets on Azure, MIGs on GCP) automatically add and remove instances based on metrics like CPU, request count, or queue depth.' },

        { type: 'image', alt: 'Autoscaling group behavior',
          svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.box{fill:#fff7ed;stroke:#c2410c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.line{stroke:#475569;stroke-width:2;fill:none}.dot{fill:#c2410c}</style></defs>
<text x="400" y="30" class="tb">Demand vs autoscaled capacity</text>
<polyline class="line" stroke="#0369a1" points="60,180 140,140 220,90 300,70 380,80 460,120 540,160 620,170 700,160"/>
<text x="720" y="170" class="t" fill="#0369a1">demand</text>
<polyline class="line" stroke="#c2410c" stroke-dasharray="4,3" points="60,185 140,150 220,110 300,90 380,95 460,130 540,165 620,180 700,180"/>
<text x="720" y="190" class="t" fill="#c2410c">capacity</text>
<text x="60" y="210" class="t">8 AM</text>
<text x="300" y="210" class="t">12 PM</text>
<text x="540" y="210" class="t">6 PM</text>
<text x="700" y="210" class="t">10 PM</text>
<text x="400" y="225" class="t">capacity tracks demand — never way over or under</text>
</svg>` },

        { type: 'callout', kind: 'info', html: 'Combine an autoscaling group with a load balancer in front and you have the standard "elastic" web tier: it sizes itself to whatever traffic you actually have right now.' },

        { type: 'heading', text: 'Scale out vs scale up', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Scale out (horizontal)</strong> — add more instances. The cloud default. No downtime if your app is stateless.',
          '<strong>Scale up (vertical)</strong> — make the instance bigger. Useful for databases or stateful workloads; usually needs a restart.'
        ] }
      ]
    },

    /* ============ Chapter 6 — Storage ============ */
    {
      id: 'cld-c6',
      title: 'Storage: object, block, file',
      icon: '🪣',
      sections: [
        { type: 'heading', text: 'Three storage shapes', level: 1 },
        { type: 'para', html: 'There are three ways to store bytes in the cloud, each with a different API and different sweet spots.' },

        { type: 'image', alt: 'Object vs block vs file storage',
          svg: `<svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b{fill:#fef3c7;stroke:#92400e;stroke-width:2}.bk{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.fl{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}</style></defs>
<rect x="30" y="30" width="240" height="180" rx="12" class="b"/>
<text x="150" y="60" class="tb">Object</text>
<text x="150" y="90" class="t">bucket / key / blob</text>
<text x="150" y="115" class="t">HTTPS API</text>
<text x="150" y="140" class="t">unlimited scale</text>
<text x="150" y="165" class="t">S3 · Blob · GCS</text>
<text x="150" y="195" class="t">best: backups, static</text>

<rect x="290" y="30" width="240" height="180" rx="12" class="bk"/>
<text x="410" y="60" class="tb">Block</text>
<text x="410" y="90" class="t">raw disk attached to a VM</text>
<text x="410" y="115" class="t">looks like /dev/sdX</text>
<text x="410" y="140" class="t">low-latency, single-attach</text>
<text x="410" y="165" class="t">EBS · Managed Disk · PD</text>
<text x="410" y="195" class="t">best: DBs, OS root</text>

<rect x="550" y="30" width="240" height="180" rx="12" class="fl"/>
<text x="670" y="60" class="tb">File</text>
<text x="670" y="90" class="t">NFS / SMB share</text>
<text x="670" y="115" class="t">many clients mount at once</text>
<text x="670" y="140" class="t">POSIX-style paths</text>
<text x="670" y="165" class="t">EFS · Azure Files · Filestore</text>
<text x="670" y="195" class="t">best: shared workspace</text>
</svg>` },

        { type: 'heading', text: 'Durability vs availability', level: 2 },
        { type: 'para', html: 'Two SLAs that sound alike but aren\'t the same:' },
        { type: 'list', kind: 'check', items: [
          '<strong>Durability</strong> — the probability the data still exists later. S3 Standard advertises <strong>11 nines (99.999999999%)</strong> annual durability.',
          '<strong>Availability</strong> — the probability you can reach the service right now. S3 Standard targets <strong>4 nines (99.99%)</strong> monthly.',
          'You can lose access (low availability) without losing data (high durability) — they\'re different failure modes.'
        ] },

        { type: 'heading', text: 'Storage classes — hot to cold', level: 2 },
        { type: 'image', alt: 'Storage class temperature scale',
          svg: `<svg viewBox="0 0 800 180" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="50%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
<style>.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#fff;text-anchor:middle}</style></defs>
<rect x="40" y="50" width="720" height="50" rx="8" fill="url(#g)"/>
<text x="120" y="82" class="tb">Hot</text>
<text x="320" y="82" class="tb">Infrequent</text>
<text x="520" y="82" class="tb">Archive</text>
<text x="700" y="82" class="tb">Deep Archive</text>
<text x="120" y="125" class="t">ms access · highest \$/GB</text>
<text x="320" y="125" class="t">cheap storage, retrieval fee</text>
<text x="520" y="125" class="t">minutes-hours thaw</text>
<text x="700" y="125" class="t">12+ hr restore, pennies/GB</text>
<text x="400" y="160" class="t">→ as data ages, lifecycle rules tier it down →</text>
</svg>` },

        { type: 'code', lang: 'json', code: `<span class="com">// S3 lifecycle rule (example)</span>
{
  "Rules": [{
    "ID": "tier-old-reports",
    "Status": "Enabled",
    "Filter": { "Prefix": "reports/" },
    "Transitions": [
      { "Days": 30,  "StorageClass": "STANDARD_IA" },
      { "Days": 90,  "StorageClass": "GLACIER" },
      { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
    ],
    "Expiration": { "Days": 2555 }
  }]
}` },

        { type: 'callout', kind: 'tip', html: 'Don\'t pick storage classes by hand. Write lifecycle rules and let the cloud move data as it ages. AWS also offers Intelligent-Tiering, which moves objects automatically based on access patterns.' }
      ]
    },

    /* ============ Chapter 7 — Networking ============ */
    {
      id: 'cld-c7',
      title: 'Networking: VPC, subnets, gateways',
      icon: '🕸️',
      sections: [
        { type: 'heading', text: 'Your private network in the cloud', level: 1 },
        { type: 'para', html: 'Every resource you launch lives inside a <strong>VPC</strong> (AWS / GCP) or <strong>VNet</strong> (Azure) — a logically isolated network you define with a CIDR block. Inside the VPC you carve out <strong>subnets</strong> and attach <strong>gateways</strong> for internet, on-prem, and cross-VPC traffic.' },

        { type: 'image', alt: 'VPC with public and private subnets',
          svg: `<svg viewBox="0 0 820 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.vpc{fill:#eff6ff;stroke:#1d4ed8;stroke-width:2}.az{fill:#f8fafc;stroke:#475569;stroke-width:1.5;stroke-dasharray:5,4}.pub{fill:#dcfce7;stroke:#15803d;stroke-width:1.5}.priv{fill:#fde2e2;stroke:#b91c1c;stroke-width:1.5}.igw{fill:#fcd34d;stroke:#92400e;stroke-width:1.5}.nat{fill:#fed7aa;stroke:#9a3412;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#a)}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="40" y="40" width="740" height="300" rx="14" class="vpc"/>
<text x="80" y="65" class="tb">VPC · 10.0.0.0/16</text>

<rect x="70" y="85" width="340" height="240" rx="10" class="az"/>
<text x="240" y="105" class="tb">AZ-1a</text>
<rect x="90" y="120" width="140" height="80" rx="8" class="pub"/>
<text x="160" y="150" class="t">Public subnet</text>
<text x="160" y="170" class="t">10.0.1.0/24</text>
<text x="160" y="190" class="t">ALB · NAT GW</text>
<rect x="250" y="120" width="140" height="80" rx="8" class="priv"/>
<text x="320" y="150" class="t">Private subnet</text>
<text x="320" y="170" class="t">10.0.10.0/24</text>
<text x="320" y="190" class="t">app servers</text>
<rect x="170" y="220" width="180" height="80" rx="8" class="priv"/>
<text x="260" y="250" class="t">Data subnet</text>
<text x="260" y="270" class="t">10.0.20.0/24</text>
<text x="260" y="290" class="t">RDS · ElastiCache</text>

<rect x="430" y="85" width="320" height="240" rx="10" class="az"/>
<text x="590" y="105" class="tb">AZ-1b</text>
<rect x="450" y="120" width="130" height="80" rx="8" class="pub"/>
<text x="515" y="150" class="t">Public subnet</text>
<text x="515" y="170" class="t">10.0.2.0/24</text>
<rect x="600" y="120" width="130" height="80" rx="8" class="priv"/>
<text x="665" y="150" class="t">Private subnet</text>
<text x="665" y="170" class="t">10.0.11.0/24</text>
<rect x="520" y="220" width="180" height="80" rx="8" class="priv"/>
<text x="610" y="250" class="t">Data subnet</text>
<text x="610" y="270" class="t">10.0.21.0/24</text>
<text x="610" y="290" class="t">RDS standby</text>

<rect x="350" y="10" width="120" height="30" rx="6" class="igw"/>
<text x="410" y="30" class="tb">Internet Gateway</text>
<path class="arr" d="M410,40 L410,90"/>
</svg>` },

        { type: 'heading', text: 'Subnets and routing', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Public subnet</strong> — has a route to an Internet Gateway. Instances can have public IPs and serve traffic.',
          '<strong>Private subnet</strong> — no direct route to the internet. Outbound traffic goes through a <strong>NAT Gateway</strong> (in a public subnet).',
          'On AWS, each subnet is tied to a single <strong>Availability Zone</strong>.',
          'On GCP, subnets are <strong>regional</strong> — they span all zones in a region.',
          'On Azure, subnets are part of a VNet and reference NSGs (Network Security Groups) for firewall rules.'
        ] },

        { type: 'heading', text: 'Security groups vs NACLs', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Security group</strong> — stateful firewall on individual instances/ENIs. Allow-only rules; the reply is implicit.',
          '<strong>NACL (Network ACL)</strong> — stateless firewall at the subnet boundary. You must allow both directions explicitly.',
          'Most teams rely on security groups and leave NACLs at defaults.'
        ] },

        { type: 'heading', text: 'Connecting VPCs and on-prem', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>VPC peering</strong> — connect two VPCs (same or different accounts/clouds). Non-transitive.',
          '<strong>Transit Gateway / Virtual WAN / Network Connectivity Center</strong> — hub-and-spoke for many VPCs.',
          '<strong>VPN</strong> — encrypted IPsec tunnel over the internet to your on-prem.',
          '<strong>Direct Connect / ExpressRoute / Cloud Interconnect</strong> — dedicated private circuit, lower latency, higher cost.'
        ] },

        { type: 'callout', kind: 'warn', html: 'CIDR ranges across all VPCs you might one day peer should NOT overlap. Pick non-overlapping blocks (e.g. 10.0.0.0/16, 10.1.0.0/16, 10.2.0.0/16) from day one — renumbering later is painful.' }
      ]
    },

    /* ============ Chapter 8 — IAM ============ */
    {
      id: 'cld-c8',
      title: 'Identity & access (IAM)',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Who can do what, on which resource?', level: 1 },
        { type: 'para', html: 'IAM is the most consequential control surface in the cloud. Every API call is authorized against a policy that asks four questions: <strong>Who</strong> is making the call (principal), <strong>What</strong> are they trying to do (action), <strong>On what</strong> (resource), and is the effect <strong>Allow</strong> or <strong>Deny</strong>.' },

        { type: 'heading', text: 'The vocabulary', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>User</strong> — a long-term identity (username/password, access key)',
          '<strong>Group</strong> — collection of users; permissions attached to the group apply to all members',
          '<strong>Role</strong> — an identity to be <em>assumed</em> temporarily; gets short-lived credentials',
          '<strong>Policy</strong> — JSON document listing allowed/denied actions',
          '<strong>Principal</strong> — the entity making the request (user, role, service)',
          '<strong>Resource</strong> — what the action targets (a specific bucket, a specific VM)'
        ] },

        { type: 'code', lang: 'json', code: `<span class="com">// AWS IAM policy — allow reading one specific bucket</span>
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket"
    ],
    "Resource": [
      "arn:aws:s3:::reports",
      "arn:aws:s3:::reports/*"
    ]
  }]
}` },

        { type: 'heading', text: 'Trust relationships and AssumeRole', level: 2 },
        { type: 'para', html: 'A role has <em>two</em> policies: a <strong>permissions policy</strong> (what it CAN do) and a <strong>trust policy</strong> (who is allowed to ASSUME it). When you assume a role, you get short-lived credentials that expire — far safer than long-lived access keys lying around on disk.' },

        { type: 'image', alt: 'IAM trust relationship',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.ec2{fill:#fed7aa;stroke:#9a3412;stroke-width:2}.role{fill:#bae6fd;stroke:#0369a1;stroke-width:2}.s3{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#ar)}</style>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="40" y="80" width="180" height="110" rx="12" class="ec2"/>
<text x="130" y="115" class="tb">EC2 instance</text>
<text x="130" y="140" class="t">app code</text>
<text x="130" y="165" class="t">needs to read S3</text>

<rect x="320" y="60" width="200" height="160" rx="12" class="role"/>
<text x="420" y="90" class="tb">IAM Role</text>
<text x="420" y="115" class="t">trust: ec2.amazonaws.com</text>
<text x="420" y="135" class="t">perms: s3:GetObject</text>
<text x="420" y="155" class="t">                on reports/*</text>
<text x="420" y="185" class="t">→ temporary creds</text>
<text x="420" y="205" class="t">   (expire in 1h)</text>

<rect x="620" y="80" width="160" height="110" rx="12" class="s3"/>
<text x="700" y="115" class="tb">S3 bucket</text>
<text x="700" y="140" class="t">reports/</text>
<text x="700" y="170" class="t">file.csv</text>

<path class="arr" d="M220,135 L320,135"/>
<text x="270" y="125" class="lab">AssumeRole</text>
<path class="arr" d="M520,140 L620,140"/>
<text x="570" y="130" class="lab">GetObject (signed)</text>
</svg>` },

        { type: 'heading', text: 'Principle of least privilege', level: 2 },
        { type: 'para', html: 'Grant exactly the actions an identity needs, on exactly the resources it touches. Start with nothing, add what you need, never the reverse.' },
        { type: 'callout', kind: 'tip', html: 'Use IAM Access Analyzer (AWS), Azure Policy + Defender for Cloud, or GCP Recommender to find over-permissioned identities. Real-world IAM is iterative — you tighten as you learn what each workload actually does.' },

        { type: 'heading', text: 'Equivalents on Azure and GCP', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Azure</strong> uses <strong>Entra ID</strong> (formerly Azure AD) for identities + <strong>RBAC</strong> roles scoped to subscriptions, resource groups, or individual resources.',
          '<strong>GCP</strong> uses <strong>Cloud IAM</strong>: identities can be users, groups, or <strong>service accounts</strong> (analogous to AWS roles). Policies bind roles to identities at a resource hierarchy.'
        ] }
      ]
    },

    /* ============ Chapter 9 — Databases ============ */
    {
      id: 'cld-c9',
      title: 'Managed databases',
      icon: '🗄️',
      sections: [
        { type: 'heading', text: 'Why managed databases won', level: 1 },
        { type: 'para', html: 'Running a production database yourself means handling backups, patching, replication, failover, monitoring, and capacity. Managed services give you all of that with a checkbox. For 95% of workloads, that\'s the right trade.' },

        { type: 'heading', text: 'Managed SQL', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>AWS RDS</strong> — MySQL, PostgreSQL, MariaDB, Oracle, SQL Server',
          '<strong>AWS Aurora</strong> — re-engineered storage for higher throughput, faster recovery, wire-compatible with MySQL/PostgreSQL',
          '<strong>Azure SQL Database</strong> — managed SQL Server with serverless and hyperscale tiers',
          '<strong>Azure Database for PostgreSQL / MySQL</strong> — managed open-source engines',
          '<strong>GCP Cloud SQL</strong> — MySQL, PostgreSQL, SQL Server',
          '<strong>GCP AlloyDB</strong> — Postgres-compatible, tuned for OLTP + analytics'
        ] },

        { type: 'code', lang: 'bash', code: `<span class="com"># Create a Multi-AZ Postgres RDS instance</span>
aws rds create-db-instance \\
  --db-instance-identifier prod-pg \\
  --db-instance-class db.m6i.large \\
  --engine postgres \\
  --multi-az \\
  --allocated-storage 100 \\
  --master-username admin \\
  --backup-retention-period 14` },

        { type: 'heading', text: 'Managed NoSQL', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>DynamoDB</strong> (AWS) — key-value &amp; document, single-digit-ms latency at any scale, on-demand or provisioned',
          '<strong>Cosmos DB</strong> (Azure) — multi-model, five tunable consistency levels, global distribution as a primitive',
          '<strong>Firestore</strong> (GCP) — document store, real-time listeners, mobile-friendly',
          '<strong>Bigtable</strong> (GCP) — wide-column, designed for huge throughput (Spotify, ad-tech)',
          '<strong>DocumentDB</strong> (AWS) — MongoDB-compatible API',
          '<strong>Neptune</strong> (AWS) · <strong>Cosmos Gremlin API</strong> · <strong>Cloud Spanner</strong> — specialty: graph, global-strong-consistent SQL'
        ] },

        { type: 'callout', kind: 'info', html: 'SQL vs NoSQL is less of a religion than it used to be. Modern cloud SQL (Aurora, Spanner) scales horizontally; modern NoSQL (DynamoDB, Cosmos) adds transactional features. Pick by access pattern, not by team color.' },

        { type: 'heading', text: 'Read replicas, sharding, and scale', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Read replicas</strong> — async copies for read-heavy workloads. RDS, Cloud SQL, Azure SQL all support them in-region and cross-region.',
          '<strong>Multi-AZ</strong> — synchronous standby in another AZ, automatic failover, HA.',
          '<strong>Sharding</strong> — partition data across nodes. Aurora has the new Aurora Limitless; Cosmos DB and DynamoDB shard transparently.',
          '<strong>Connection pooling</strong> — RDS Proxy, Azure SQL connection pooling, PgBouncer-in-a-box — needed once concurrent connections exceed a few hundred.'
        ] },

        { type: 'heading', text: 'Picking a database — rough guide', level: 2 },
        { type: 'image', alt: 'Database selection decision sketch',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.q{fill:#fde68a;stroke:#92400e;stroke-width:2}.a{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#a2)}</style>
<marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="320" y="20" width="180" height="50" rx="10" class="q"/>
<text x="410" y="50" class="tb">Need rich joins &amp; transactions?</text>
<path class="arr" d="M380,70 L180,120"/>
<text x="240" y="100" class="t">yes</text>
<path class="arr" d="M440,70 L640,120"/>
<text x="580" y="100" class="t">no</text>

<rect x="40" y="120" width="280" height="60" rx="10" class="q"/>
<text x="180" y="145" class="tb">Need global writes / strong consistency?</text>
<text x="180" y="165" class="t">across regions</text>

<rect x="540" y="120" width="240" height="60" rx="10" class="q"/>
<text x="660" y="145" class="tb">Predictable access pattern?</text>
<text x="660" y="165" class="t">key-based</text>

<path class="arr" d="M120,180 L80,230"/>
<text x="80" y="220" class="t">yes</text>
<rect x="20" y="230" width="140" height="40" rx="8" class="a"/>
<text x="90" y="255" class="tb">Spanner / Cosmos</text>

<path class="arr" d="M240,180 L260,230"/>
<text x="260" y="220" class="t">no</text>
<rect x="180" y="230" width="180" height="40" rx="8" class="a"/>
<text x="270" y="255" class="tb">Aurora / Azure SQL / Cloud SQL</text>

<path class="arr" d="M620,180 L580,230"/>
<text x="580" y="220" class="t">yes</text>
<rect x="500" y="230" width="170" height="40" rx="8" class="a"/>
<text x="585" y="255" class="tb">DynamoDB / Cosmos</text>

<path class="arr" d="M720,180 L720,230"/>
<text x="730" y="220" class="t">flexible</text>
<rect x="680" y="230" width="120" height="40" rx="8" class="a"/>
<text x="740" y="255" class="tb">Firestore</text>
</svg>` }
      ]
    },

    /* ============ Chapter 10 — Serverless ============ */
    {
      id: 'cld-c10',
      title: 'Serverless (FaaS)',
      icon: '⚡',
      sections: [
        { type: 'heading', text: 'Tiny functions, triggered by events', level: 1 },
        { type: 'para', html: 'In Functions-as-a-Service you upload a single function — the rest of the platform handles HTTP routing, scaling, isolation, and per-invocation billing. "Serverless" doesn\'t mean there\'s no server, just that you never see, provision, or patch one.' },

        { type: 'image', alt: 'Serverless event flow',
          svg: `<svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.src{fill:#fde68a;stroke:#92400e;stroke-width:2}.fn{fill:#bae6fd;stroke:#0369a1;stroke-width:2}.dst{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#m3)}</style>
<marker id="m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="30" y="40" width="140" height="50" rx="8" class="src"/><text x="100" y="70" class="tb">HTTP request</text>
<rect x="30" y="105" width="140" height="50" rx="8" class="src"/><text x="100" y="135" class="tb">S3 upload</text>
<rect x="30" y="170" width="140" height="50" rx="8" class="src"/><text x="100" y="200" class="tb">SQS message</text>

<rect x="320" y="105" width="180" height="50" rx="10" class="fn"/>
<text x="410" y="130" class="tb">Lambda function</text>
<text x="410" y="148" class="t">runs only on event</text>

<rect x="630" y="40" width="160" height="50" rx="8" class="dst"/><text x="710" y="70" class="tb">DynamoDB write</text>
<rect x="630" y="105" width="160" height="50" rx="8" class="dst"/><text x="710" y="135" class="tb">Send email (SES)</text>
<rect x="630" y="170" width="160" height="50" rx="8" class="dst"/><text x="710" y="200" class="tb">Publish to SNS</text>

<path class="arr" d="M170,65 L320,120"/>
<path class="arr" d="M170,130 L320,130"/>
<path class="arr" d="M170,195 L320,140"/>
<path class="arr" d="M500,120 L630,65"/>
<path class="arr" d="M500,130 L630,130"/>
<path class="arr" d="M500,140 L630,195"/>
</svg>` },

        { type: 'heading', text: 'Anatomy of a function', level: 2 },
        { type: 'code', lang: 'python', code: `<span class="com"># AWS Lambda handler in Python</span>
<span class="kw">import</span> json, boto3

s3 = boto3.<span class="fn">client</span>(<span class="str">"s3"</span>)
db = boto3.<span class="fn">resource</span>(<span class="str">"dynamodb"</span>).<span class="fn">Table</span>(<span class="str">"Uploads"</span>)

<span class="kw">def</span> <span class="fn">handler</span>(event, context):
    <span class="kw">for</span> rec <span class="kw">in</span> event[<span class="str">"Records"</span>]:
        bucket = rec[<span class="str">"s3"</span>][<span class="str">"bucket"</span>][<span class="str">"name"</span>]
        key    = rec[<span class="str">"s3"</span>][<span class="str">"object"</span>][<span class="str">"key"</span>]
        size   = rec[<span class="str">"s3"</span>][<span class="str">"object"</span>][<span class="str">"size"</span>]
        db.<span class="fn">put_item</span>(Item={<span class="str">"bucket"</span>: bucket, <span class="str">"key"</span>: key, <span class="str">"size"</span>: size})
    <span class="kw">return</span> {<span class="str">"statusCode"</span>: <span class="num">200</span>, <span class="str">"body"</span>: json.<span class="fn">dumps</span>(<span class="str">"ok"</span>)}` },

        { type: 'heading', text: 'Cold starts and limits', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Cold start</strong> — the first invocation in a fresh container pays an initialization cost (100 ms to a few seconds, worse for JVM/.NET).',
          '<strong>Warm</strong> — subsequent invocations reuse the same container; almost free latency.',
          '<strong>Concurrency</strong> — each cloud has per-account limits (default Lambda: 1000 concurrent). Configurable.',
          '<strong>Timeout</strong> — Lambda: 15 min max. Azure Functions: 5–10 min by default, up to 60 with Premium. Cloud Functions Gen 2: 60 min.',
          '<strong>Stateless</strong> — never count on local disk surviving between invocations.'
        ] },

        { type: 'callout', kind: 'warn', html: 'Don\'t use serverless to wrap a slow REST call to a slow upstream. Tying up a Lambda for 10 seconds at scale is more expensive than a small VM doing the same job.' },

        { type: 'heading', text: 'When serverless shines', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Bursty, unpredictable traffic — scale-to-zero matters',
          'Event-driven plumbing — "when X happens, do Y"',
          'Simple HTTP APIs with light compute (CRUD on a database)',
          'Image/file processing on upload',
          'Cron jobs that run a few minutes a day'
        ] }
      ]
    },

    /* ============ Chapter 11 — Messaging ============ */
    {
      id: 'cld-c11',
      title: 'Messaging & queues',
      icon: '📨',
      sections: [
        { type: 'heading', text: 'Decouple producers from consumers', level: 1 },
        { type: 'para', html: 'Direct, synchronous calls between services are simple but fragile — when the downstream is slow or down, the upstream waits or fails. Putting a queue or a pub/sub topic in between lets producers fire-and-forget, and lets consumers process at their own pace.' },

        { type: 'heading', text: 'Three messaging shapes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Queue (point-to-point)</strong> — one producer pushes; one consumer (from a pool) pulls each message. Used for work distribution.',
          '<strong>Pub/Sub (fan-out)</strong> — one publisher, many subscribers, each getting its own copy. Used for event broadcast.',
          '<strong>Event bus</strong> — events from many sources route to many targets via rules. Used to wire up reactive architectures.'
        ] },

        { type: 'image', alt: 'Queue vs pub/sub',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.p{fill:#fde68a;stroke:#92400e;stroke-width:2}.q{fill:#cffafe;stroke:#0e7490;stroke-width:2}.c{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#m4)}</style>
<marker id="m4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<text x="200" y="25" class="tb">Queue (point-to-point)</text>
<rect x="60" y="50" width="100" height="40" rx="6" class="p"/><text x="110" y="76" class="tb">Producer</text>
<rect x="200" y="50" width="120" height="40" rx="6" class="q"/><text x="260" y="76" class="tb">Queue (SQS)</text>
<rect x="360" y="20" width="100" height="40" rx="6" class="c"/><text x="410" y="46" class="tb">Worker 1</text>
<rect x="360" y="80" width="100" height="40" rx="6" class="c"/><text x="410" y="106" class="tb">Worker 2</text>
<path class="arr" d="M160,70 L200,70"/>
<path class="arr" d="M320,65 L360,40"/>
<path class="arr" d="M320,75 L360,100"/>
<text x="500" y="70" class="t">each msg → ONE worker</text>

<text x="600" y="170" class="tb">Pub/Sub (fan-out)</text>
<rect x="40" y="200" width="100" height="40" rx="6" class="p"/><text x="90" y="226" class="tb">Publisher</text>
<rect x="180" y="200" width="120" height="40" rx="6" class="q"/><text x="240" y="226" class="tb">Topic (SNS)</text>
<rect x="340" y="170" width="100" height="40" rx="6" class="c"/><text x="390" y="196" class="tb">Sub A</text>
<rect x="340" y="220" width="100" height="40" rx="6" class="c"/><text x="390" y="246" class="tb">Sub B</text>
<rect x="340" y="260" width="100" height="40" rx="6" class="c"/><text x="390" y="285" class="tb">Sub C</text>
<path class="arr" d="M140,220 L180,220"/>
<path class="arr" d="M300,220 L340,190"/>
<path class="arr" d="M300,220 L340,240"/>
<path class="arr" d="M300,220 L340,280"/>
<text x="500" y="220" class="t">each msg → ALL subs</text>
</svg>` },

        { type: 'heading', text: 'Vendor map', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>AWS</strong>: SQS (queue) · SNS (pub/sub topic) · EventBridge (event bus) · Kinesis / MSK (streams)',
          '<strong>Azure</strong>: Service Bus (queue + topic) · Event Grid (event bus) · Event Hubs (streams)',
          '<strong>GCP</strong>: Pub/Sub (queue + topic + bus) · Eventarc (events) · Dataflow (streams)'
        ] },

        { type: 'heading', text: 'Delivery semantics', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>At-least-once</strong> — the default. Messages may be redelivered; consumers must be idempotent.',
          '<strong>Exactly-once</strong> — advertised by some services (SQS FIFO, Pub/Sub exactly-once, Kafka EOS) within bounded conditions. Always read the fine print.',
          '<strong>Ordered</strong> — FIFO queues (SQS FIFO, Service Bus sessions, Pub/Sub ordering keys). Lower throughput than unordered.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Design every consumer to be <strong>idempotent</strong>: processing the same message twice should produce the same result. This single rule eliminates 90% of "exactly-once" worries.' }
      ]
    },

    /* ============ Chapter 12 — Observability ============ */
    {
      id: 'cld-c12',
      title: 'Monitoring & logging',
      icon: '📊',
      sections: [
        { type: 'heading', text: 'You can\'t fix what you can\'t see', level: 1 },
        { type: 'para', html: 'Cloud observability rests on three signals: <strong>metrics</strong> (numeric time series), <strong>logs</strong> (structured or free-form text events), and <strong>traces</strong> (the end-to-end path of one request through many services). Alerts ride on top of all three.' },

        { type: 'heading', text: 'Vendor map', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>AWS</strong>: CloudWatch Metrics, CloudWatch Logs, X-Ray (traces), CloudWatch Alarms',
          '<strong>Azure</strong>: Azure Monitor (metrics), Log Analytics + KQL queries, Application Insights (traces)',
          '<strong>GCP</strong>: Cloud Monitoring, Cloud Logging, Cloud Trace, Cloud Profiler',
          '<strong>Cross-cloud / open</strong>: Prometheus + Grafana, OpenTelemetry, Datadog, New Relic, Honeycomb'
        ] },

        { type: 'heading', text: 'Anatomy of an alert', level: 2 },
        { type: 'code', lang: 'json', code: `<span class="com">// CloudWatch alarm — error rate &gt; 1% for 5 min</span>
{
  "AlarmName": "checkout-error-rate",
  "Namespace": "AWS/ApplicationELB",
  "MetricName": "HTTPCode_Target_5XX_Count",
  "ComparisonOperator": "GreaterThanThreshold",
  "Threshold": 10,
  "EvaluationPeriods": 5,
  "Period": 60,
  "Statistic": "Sum",
  "AlarmActions": ["arn:aws:sns:us-east-1:123:pager"]
}` },

        { type: 'heading', text: 'SLI · SLO · SLA', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>SLI</strong> (Service Level Indicator) — a measurable thing, e.g. "95th percentile request latency"',
          '<strong>SLO</strong> (Service Level Objective) — an internal target, e.g. "p95 latency &lt; 300 ms over 28 days"',
          '<strong>SLA</strong> (Service Level Agreement) — a contractual promise with consequences for missing it'
        ] },

        { type: 'callout', kind: 'info', html: 'Cloud providers publish SLAs for their services (e.g., 99.99% for multi-AZ RDS). Your application\'s SLA cannot exceed the SLA of its weakest dependency.' },

        { type: 'heading', text: 'Distributed tracing in 30 seconds', level: 2 },
        { type: 'para', html: 'One request enters your system; it touches a load balancer, a service, a cache, a database, a downstream API. A <strong>trace</strong> is the timeline of that one request, broken into <strong>spans</strong> per service. Tools like X-Ray, App Insights, Cloud Trace, and OpenTelemetry instrument your code to emit spans automatically.' },

        { type: 'image', alt: 'Trace spans across services',
          svg: `<svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.s{stroke:#0f172a;stroke-width:1}.api{fill:#fed7aa}.web{fill:#bae6fd}.svc{fill:#bbf7d0}.db{fill:#fde68a}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a}</style></defs>
<text x="20" y="30" class="tb">Trace: checkout request — total 240 ms</text>
<text x="20" y="60" class="t">API Gateway</text>
<rect x="180" y="48" width="600" height="18" class="api s"/>
<text x="20" y="90" class="t">Web service</text>
<rect x="200" y="78" width="540" height="18" class="web s"/>
<text x="20" y="120" class="t">Auth service</text>
<rect x="220" y="108" width="80"  height="18" class="svc s"/>
<text x="20" y="150" class="t">Order service</text>
<rect x="310" y="138" width="280" height="18" class="svc s"/>
<text x="20" y="180" class="t">Database</text>
<rect x="340" y="168" width="120" height="18" class="db s"/>
<text x="600" y="180" class="t">cache miss → DB</text>
</svg>` }
      ]
    },

    /* ============ Chapter 13 — Cost ============ */
    {
      id: 'cld-c13',
      title: 'Cost optimization',
      icon: '💸',
      sections: [
        { type: 'heading', text: 'Pay less without changing what you ship', level: 1 },
        { type: 'para', html: 'Cloud spend has a way of creeping. Three months in, your bill is twice what you expected. Almost always the cause is the same handful of patterns. The fix is rarely a rewrite — it\'s usage discipline plus pricing levers.' },

        { type: 'heading', text: 'Pricing levers', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>On-demand</strong> — pay sticker price by the second. The default.',
          '<strong>Reserved / Savings Plans</strong> — commit 1 or 3 years; save 30–70%.',
          '<strong>Spot / Preemptible</strong> — bid on spare capacity; save 70–90% but you can be reclaimed with ~2 min notice.',
          '<strong>Volume / committed-use discounts</strong> — automatic at certain spend tiers.'
        ] },

        { type: 'image', alt: 'Cost optimization decision tree',
          svg: `<svg viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg">
<defs><style>.q{fill:#fde68a;stroke:#92400e;stroke-width:2}.a{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#m5)}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569}</style>
<marker id="m5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="340" y="20" width="200" height="44" rx="10" class="q"/>
<text x="440" y="48" class="tb">Workload running 24×7?</text>
<path class="arr" d="M390,64 L150,110"/><text x="240" y="90" class="lab">yes</text>
<path class="arr" d="M490,64 L660,110"/><text x="600" y="90" class="lab">no</text>

<rect x="40" y="110" width="220" height="44" rx="10" class="q"/>
<text x="150" y="138" class="tb">Can commit 1–3 years?</text>
<path class="arr" d="M100,154 L60,210"/><text x="60" y="195" class="lab">yes</text>
<path class="arr" d="M200,154 L240,210"/><text x="240" y="195" class="lab">no</text>
<rect x="20" y="210" width="100" height="44" rx="8" class="a"/>
<text x="70" y="238" class="tb">Reserved / SP</text>
<rect x="180" y="210" width="120" height="44" rx="8" class="a"/>
<text x="240" y="238" class="tb">On-demand</text>

<rect x="560" y="110" width="220" height="44" rx="10" class="q"/>
<text x="670" y="138" class="tb">Restartable / batch?</text>
<path class="arr" d="M620,154 L580,210"/><text x="575" y="195" class="lab">yes</text>
<path class="arr" d="M720,154 L760,210"/><text x="765" y="195" class="lab">no</text>
<rect x="540" y="210" width="100" height="44" rx="8" class="a"/>
<text x="590" y="238" class="tb">Spot</text>
<rect x="700" y="210" width="160" height="44" rx="8" class="a"/>
<text x="780" y="238" class="tb">Right-size + Auto-stop</text>
</svg>` },

        { type: 'heading', text: 'The cost killers (in order)', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Idle resources</strong> — non-prod env running 24×7, forgotten test instances, unattached EBS volumes',
          '<strong>Over-provisioning</strong> — running m5.4xlarge at 5% CPU "just in case"',
          '<strong>Egress</strong> — cross-region or to-internet bandwidth charges (often more expensive than compute)',
          '<strong>NAT Gateway</strong> — easy to misuse; high $/GB processed',
          '<strong>Hot storage of cold data</strong> — logs from 2021 sitting in S3 Standard',
          '<strong>Verbose logging</strong> — debug logs streaming 24×7 into a paid logging tier'
        ] },

        { type: 'heading', text: 'Tagging strategy', level: 2 },
        { type: 'para', html: 'Tag every resource with at least: <code>env</code>, <code>team</code>, <code>cost-center</code>, <code>app</code>. Then cost-allocation reports can break the bill down by team. Untagged resources are unknowable spend.' },

        { type: 'callout', kind: 'tip', html: 'Use Cost Explorer (AWS), Cost Management (Azure), or Cost Reports (GCP) every Monday morning. Spend that\'s reviewed shrinks; spend that\'s ignored grows.' },

        { type: 'heading', text: 'FinOps as a practice', level: 2 },
        { type: 'para', html: '<strong>FinOps</strong> is the discipline of bringing financial accountability to variable cloud spend, with engineering and finance working together. It defines a culture (engineers think about cost), a set of practices (tagging, budgets, alerts), and tooling (visibility dashboards, anomaly detection).' }
      ]
    },

    /* ============ Chapter 14 — IaC ============ */
    {
      id: 'cld-c14',
      title: 'Infrastructure as Code',
      icon: '📜',
      sections: [
        { type: 'heading', text: 'Click less, declare more', level: 1 },
        { type: 'para', html: 'Manually clicking through the cloud console is fine for the first hour. After that, every serious team adopts <strong>Infrastructure as Code (IaC)</strong>: infrastructure described in text files, checked into git, applied by a tool. The benefits — reproducibility, code review, easy rollback, fast DR — are too big to skip.' },

        { type: 'heading', text: 'The big tools', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Terraform</strong> (HashiCorp) — multi-cloud, HCL syntax, the de facto standard.',
          '<strong>OpenTofu</strong> — community fork of Terraform after license change, drop-in compatible.',
          '<strong>CloudFormation</strong> — AWS-native, JSON or YAML, deep integration with AWS services.',
          '<strong>ARM / Bicep</strong> — Azure-native. Bicep is the modern DSL that compiles to ARM JSON.',
          '<strong>Google Deployment Manager / Config Connector</strong> — GCP-native (less popular than Terraform on GCP).',
          '<strong>Pulumi</strong> — multi-cloud, but you write infrastructure in real programming languages (TS, Python, Go, Java, C#).',
          '<strong>AWS CDK / Azure CDK / GCP CDK</strong> — provider-native version of the Pulumi idea.'
        ] },

        { type: 'heading', text: 'A tiny Terraform example', level: 2 },
        { type: 'code', lang: 'hcl', code: `<span class="com"># main.tf — an S3 bucket with versioning &amp; tags</span>
terraform {
  required_providers {
    aws = { source = <span class="str">"hashicorp/aws"</span>, version = <span class="str">"~&gt; 5.0"</span> }
  }
  backend <span class="str">"s3"</span> {
    bucket = <span class="str">"acme-tf-state"</span>
    key    = <span class="str">"reports/terraform.tfstate"</span>
    region = <span class="str">"us-east-1"</span>
  }
}

resource <span class="str">"aws_s3_bucket"</span> <span class="str">"reports"</span> {
  bucket = <span class="str">"acme-reports-prod"</span>
  tags = {
    env  = <span class="str">"prod"</span>
    team = <span class="str">"data"</span>
  }
}

resource <span class="str">"aws_s3_bucket_versioning"</span> <span class="str">"v"</span> {
  bucket = aws_s3_bucket.reports.id
  versioning_configuration {
    status = <span class="str">"Enabled"</span>
  }
}` },

        { type: 'heading', text: 'The workflow', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Write/edit <code>.tf</code> files',
          '<code>terraform init</code> — download providers, configure backend',
          '<code>terraform plan</code> — diff: what will change?',
          'Code review the plan',
          '<code>terraform apply</code> — make it real',
          'State file updates to reflect new reality'
        ] },

        { type: 'callout', kind: 'warn', html: 'The Terraform state file is the source of truth for what currently exists. It can contain secrets. Store it in a remote backend (S3 + DynamoDB lock, Azure Storage + lease, GCS bucket, or Terraform Cloud) — never commit it to git, never let two people apply at the same time.' },

        { type: 'heading', text: 'Modules and reuse', level: 2 },
        { type: 'para', html: 'A <strong>module</strong> is a reusable Terraform package — say, "a VPC with public + private subnets across N AZs." Big organizations write internal module libraries so every team gets the same hardened building blocks. The Terraform Registry has thousands of community modules.' },

        { type: 'heading', text: 'Drift', level: 2 },
        { type: 'para', html: '"Drift" is when someone clicks in the console and changes a resource that IaC also manages. Next plan, Terraform tries to undo their change. Combat drift with read-only console access in prod and a "no clicking" team rule.' }
      ]
    },

    /* ============ Chapter 15 — HA/DR & Security ============ */
    {
      id: 'cld-c15',
      title: 'HA, DR, and the security model',
      icon: '🛡️',
      sections: [
        { type: 'heading', text: 'Designing for failure', level: 1 },
        { type: 'para', html: 'In the cloud, failures are not exceptional — they\'re continuous. Disks die, instances reboot, AZs hiccup, regions occasionally have bad days. Reliable systems assume failure and design around it.' },

        { type: 'heading', text: 'RTO vs RPO', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>RTO — Recovery Time Objective</strong> — how long can the service be DOWN?',
          '<strong>RPO — Recovery Point Objective</strong> — how much DATA can you afford to lose?',
          'Smaller RTO/RPO = more replication, more cost, more complexity.'
        ] },

        { type: 'image', alt: 'DR strategies ladder',
          svg: `<svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.s1{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.s2{fill:#fde68a;stroke:#92400e;stroke-width:2}.s3{fill:#bae6fd;stroke:#0369a1;stroke-width:2}.s4{fill:#bbf7d0;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style></defs>
<rect x="40" y="40" width="170" height="180" rx="12" class="s1"/>
<text x="125" y="70" class="tb">Backup &amp; restore</text>
<text x="125" y="105" class="t">snapshots in S3 / Blob</text>
<text x="125" y="130" class="t">no infra running</text>
<text x="125" y="160" class="tb">RTO: hours</text>
<text x="125" y="180" class="tb">RPO: hours</text>
<text x="125" y="210" class="lab">cheapest</text>

<rect x="225" y="40" width="170" height="180" rx="12" class="s2"/>
<text x="310" y="70" class="tb">Pilot light</text>
<text x="310" y="105" class="t">minimal infra warm</text>
<text x="310" y="130" class="t">core DB replicating</text>
<text x="310" y="160" class="tb">RTO: 10s of min</text>
<text x="310" y="180" class="tb">RPO: minutes</text>

<rect x="410" y="40" width="170" height="180" rx="12" class="s3"/>
<text x="495" y="70" class="tb">Warm standby</text>
<text x="495" y="105" class="t">full stack, scaled down</text>
<text x="495" y="130" class="t">ready to take traffic</text>
<text x="495" y="160" class="tb">RTO: minutes</text>
<text x="495" y="180" class="tb">RPO: seconds</text>

<rect x="595" y="40" width="170" height="180" rx="12" class="s4"/>
<text x="680" y="70" class="tb">Active-active</text>
<text x="680" y="105" class="t">both regions live</text>
<text x="680" y="130" class="t">load-balanced</text>
<text x="680" y="160" class="tb">RTO: ~0</text>
<text x="680" y="180" class="tb">RPO: ~0</text>
<text x="680" y="210" class="lab">most expensive</text>
</svg>` },

        { type: 'heading', text: 'Multi-AZ vs multi-region', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Multi-AZ</strong> protects against a single-datacenter failure inside a region. Cheap, near-universal for production. Sub-millisecond replication.',
          '<strong>Multi-region</strong> protects against a region-wide event. Significant cost and complexity. Reserved for workloads where downtime is genuinely unacceptable.'
        ] },

        { type: 'image', alt: 'Multi-region active-active vs active-passive',
          svg: `<svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.live{fill:#bbf7d0;stroke:#166534;stroke-width:2}.warm{fill:#fde68a;stroke:#92400e;stroke-width:2}.cold{fill:#e5e7eb;stroke:#475569;stroke-width:2}.dns{fill:#bae6fd;stroke:#0369a1;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#m6)}</style>
<marker id="m6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<text x="200" y="25" class="tb">Active-active</text>
<rect x="160" y="40" width="100" height="40" rx="6" class="dns"/><text x="210" y="65" class="tb">DNS (50/50)</text>
<rect x="40" y="100" width="150" height="60" rx="8" class="live"/>
<text x="115" y="125" class="tb">Region A</text><text x="115" y="148" class="t">live · serving</text>
<rect x="240" y="100" width="150" height="60" rx="8" class="live"/>
<text x="315" y="125" class="tb">Region B</text><text x="315" y="148" class="t">live · serving</text>
<path class="arr" d="M195,80 L115,100"/>
<path class="arr" d="M225,80 L315,100"/>
<path class="arr" d="M190,140 L240,140" stroke-dasharray="4,3"/>
<text x="215" y="175" class="t">data replication</text>

<text x="620" y="25" class="tb">Active-passive (failover)</text>
<rect x="580" y="40" width="120" height="40" rx="6" class="dns"/><text x="640" y="65" class="tb">DNS health-check</text>
<rect x="460" y="100" width="150" height="60" rx="8" class="live"/>
<text x="535" y="125" class="tb">Region A</text><text x="535" y="148" class="t">primary (all traffic)</text>
<rect x="660" y="100" width="150" height="60" rx="8" class="warm"/>
<text x="735" y="125" class="tb">Region B</text><text x="735" y="148" class="t">warm standby</text>
<path class="arr" d="M620,80 L535,100"/>
<path class="arr" d="M610,140 L660,140" stroke-dasharray="4,3"/>
<text x="635" y="180" class="t">async replication</text>
<text x="640" y="210" class="t">DNS flips to B on failure</text>
</svg>` },

        { type: 'heading', text: 'Shared responsibility — the security model', level: 2 },
        { type: 'para', html: 'Cloud security is a shared responsibility. The provider secures the cloud (datacenter, hardware, hypervisor, global network). You secure what\'s in the cloud (your code, your data, your identities, your config). The line shifts as you go from IaaS to SaaS, but <strong>identity, access, and data classification are always yours</strong>.' },

        { type: 'image', alt: 'Shared responsibility model',
          svg: `<svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.you{fill:#fed7aa;stroke:#9a3412;stroke-width:1.5}.prov{fill:#bae6fd;stroke:#0369a1;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569}</style></defs>
<text x="410" y="25" class="tb">Shared Responsibility Model</text>
<rect x="40" y="50" width="740" height="40" class="you"/>
<text x="410" y="76" class="tb">YOU: data classification · client + app identity</text>
<rect x="40" y="92" width="740" height="40" class="you"/>
<text x="410" y="118" class="tb">YOU: application code · access management · network &amp; firewall config</text>
<rect x="40" y="134" width="740" height="40" class="you"/>
<text x="410" y="160" class="tb">YOU (IaaS only): OS · platform · patching</text>
<rect x="40" y="176" width="740" height="40" class="prov"/>
<text x="410" y="202" class="tb">PROVIDER: compute · storage · DB · networking infrastructure</text>
<rect x="40" y="218" width="740" height="36" class="prov"/>
<text x="410" y="241" class="tb">PROVIDER: datacenters · physical security · hypervisor</text>
</svg>` },

        { type: 'heading', text: 'Encryption — at rest and in transit', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>At rest</strong> — data on disks/in storage is AES-256 encrypted; on by default for most managed services now.',
          '<strong>In transit</strong> — TLS between client and service; provider backbones also encrypt cross-AZ.',
          '<strong>KMS</strong> — AWS KMS, Azure Key Vault, Cloud KMS — manage your keys, control rotation, audit every use.',
          '<strong>Customer-managed keys (CMK / CMEK)</strong> — you control the key lifecycle. Provider-managed keys are easier; CMK gives you the kill switch.',
          '<strong>HYOK / BYOK</strong> — bring or hold your own key, for the most regulated workloads.'
        ] },

        { type: 'callout', kind: 'success', html: 'The fundamentals — least-privilege IAM, encryption everywhere, multi-AZ for HA, IaC for reproducibility, tagging for cost, alerts on the right SLIs — solve the vast majority of real-world cloud problems. The exotic services are for after you have those nailed.' },

        { type: 'heading', text: 'Where to go from here', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Go deeper on the cloud you\'ll use: AWS Solutions Architect, Azure AZ-104, GCP ACE certifications.',
          'Learn one IaC tool well (Terraform is the safest bet).',
          'Pair this course with the <em>Docker</em> and <em>Kubernetes</em> courses for the container-orchestration depth this one left out.',
          'Pair with <em>High-Level Design</em> and <em>API Design</em> for the architecture side; with <em>Microservices</em> for the application side.'
        ] }
      ]
    }

  ]
});
