LEARN('docker', {
  intro: 'Containerize anything. From the first hello-world to multi-stage builds, Compose stacks, and hardened production images.',
  chapters: [

    /* ============== CH 1 — What is a container ============== */
    {
      id: 'docker-c1', title: 'What is a container?', icon: '🐳',
      sections: [
        { type: 'heading', text: 'A container is a wrapped process', level: 1 },
        { type: 'para', html: 'A container is, at its core, a regular Linux process. What makes it a "container" is that the kernel gives it a private view of the world — its own filesystem, its own network interfaces, its own process tree — using two long-standing Linux features: <strong>namespaces</strong> and <strong>cgroups</strong>.' },
        { type: 'para', html: 'Namespaces isolate. Cgroups limit. Together they create the illusion that the process is alone on the machine.' },
        { type: 'heading', text: 'Containers vs virtual machines', level: 2 },
        { type: 'image', alt: 'VM stack vs Container stack side by side', svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="260" height="260" fill="#fff" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="150" y="32" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2496ed">Virtual Machines</text>
  <rect x="40" y="50"  width="220" height="30" fill="#e3f2fd"/><text x="150" y="70" text-anchor="middle" font-family="sans-serif" font-size="12">App A</text>
  <rect x="40" y="80"  width="220" height="30" fill="#bbdefb"/><text x="150" y="100" text-anchor="middle" font-family="sans-serif" font-size="12">Guest OS (~1 GB)</text>
  <rect x="40" y="110" width="220" height="30" fill="#e3f2fd"/><text x="150" y="130" text-anchor="middle" font-family="sans-serif" font-size="12">App B</text>
  <rect x="40" y="140" width="220" height="30" fill="#bbdefb"/><text x="150" y="160" text-anchor="middle" font-family="sans-serif" font-size="12">Guest OS (~1 GB)</text>
  <rect x="40" y="170" width="220" height="30" fill="#90caf9"/><text x="150" y="190" text-anchor="middle" font-family="sans-serif" font-size="12">Hypervisor</text>
  <rect x="40" y="200" width="220" height="30" fill="#64b5f6"/><text x="150" y="220" text-anchor="middle" font-family="sans-serif" font-size="12">Host OS</text>
  <rect x="40" y="230" width="220" height="30" fill="#42a5f5"/><text x="150" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">Hardware</text>

  <rect x="320" y="10" width="260" height="260" fill="#fff" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="450" y="32" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2496ed">Containers</text>
  <rect x="340" y="50" width="70" height="60" fill="#e3f2fd"/><text x="375" y="85" text-anchor="middle" font-family="sans-serif" font-size="11">App A</text>
  <rect x="415" y="50" width="70" height="60" fill="#e3f2fd"/><text x="450" y="85" text-anchor="middle" font-family="sans-serif" font-size="11">App B</text>
  <rect x="490" y="50" width="70" height="60" fill="#e3f2fd"/><text x="525" y="85" text-anchor="middle" font-family="sans-serif" font-size="11">App C</text>
  <rect x="340" y="110" width="220" height="30" fill="#90caf9"/><text x="450" y="130" text-anchor="middle" font-family="sans-serif" font-size="12">Docker Engine</text>
  <rect x="340" y="140" width="220" height="60" fill="#64b5f6"/><text x="450" y="175" text-anchor="middle" font-family="sans-serif" font-size="12">Host OS (shared kernel)</text>
  <rect x="340" y="200" width="220" height="60" fill="#42a5f5"/><text x="450" y="235" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">Hardware</text>
</svg>` },
        { type: 'para', html: 'VMs duplicate the kernel; containers share it. That single difference explains why containers boot in milliseconds and ship in megabytes.' },
        { type: 'heading', text: 'Namespaces (the isolation)', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>mnt</code> — private filesystem tree',
          '<code>net</code> — own network interfaces and routing table',
          '<code>pid</code> — own process IDs (your container app is PID 1)',
          '<code>uts</code> — own hostname',
          '<code>ipc</code> — own shared memory segments',
          '<code>user</code> — UID/GID remapping'
        ] },
        { type: 'heading', text: 'cgroups (the limits)', level: 2 },
        { type: 'para', html: 'Cgroups (control groups) cap how much CPU, memory, block I/O, and PIDs a process can use. Without them, one runaway container could starve the whole host.' },
        { type: 'callout', kind: 'info', html: 'Containers are not magic. <code>strace</code> a container process from the host and you will see a normal Linux process with extra clone flags.' },
        { type: 'heading', text: 'Why containers won', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Same image on dev, CI, and prod — no "works on my machine"',
          'Fast — boot in ms, deploy in seconds',
          'Dense — hundreds per host',
          'Reproducible — the Dockerfile is the recipe',
          'Composable — sidecar this, link that'
        ] }
      ]
    },

    /* ============== CH 2 — Install & first run ============== */
    {
      id: 'docker-c2', title: 'Installing and your first run', icon: '👋',
      sections: [
        { type: 'heading', text: 'Get Docker', level: 1 },
        { type: 'para', html: 'Docker Desktop is the easiest path on Mac and Windows. On Linux, install the Docker Engine package for your distro.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Mac (Homebrew)</span>
brew install --cask docker

<span class="com"># Linux (Debian/Ubuntu)</span>
curl -fsSL https://get.docker.com | sh

<span class="com"># verify</span>
docker --version
docker info` },
        { type: 'heading', text: 'Hello, container', level: 2 },
        { type: 'code', lang: 'bash', code: `$ docker run hello-world
<span class="com">Unable to find image 'hello-world:latest' locally</span>
<span class="com">latest: Pulling from library/hello-world</span>
<span class="com">Status: Downloaded newer image for hello-world:latest</span>

Hello from Docker!
This message shows that your installation appears to be working correctly.` },
        { type: 'para', html: 'In one line Docker checked the local cache, pulled the image from Docker Hub, created a container, started it, and streamed its output.' },
        { type: 'heading', text: 'Anatomy of a docker command', level: 2 },
        { type: 'code', lang: 'bash', code: `docker <span class="kw">&lt;command&gt;</span> [flags] <span class="ty">&lt;image-or-container&gt;</span> [args...]

<span class="com"># Read it as: verb, options, target, payload</span>
docker run    -it --rm   ubuntu        bash
docker logs   -f         my-api
docker exec   -it        my-api        sh` },
        { type: 'callout', kind: 'tip', html: '<code>docker run -it --rm alpine sh</code> is your sandbox. It drops you in a tiny shell, and the container vanishes when you exit. Perfect for "let me try a thing."' },
        { type: 'heading', text: 'Flags you will use every day', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>-d</code> — detach (run in background)',
          '<code>-it</code> — interactive + TTY (i.e., I want a shell)',
          '<code>--rm</code> — delete the container when it exits',
          '<code>--name</code> — friendly name instead of <code>boring_einstein</code>',
          '<code>-p host:container</code> — publish a port',
          '<code>-v src:dst</code> — mount a volume or bind path',
          '<code>-e KEY=VAL</code> — set an environment variable'
        ] }
      ]
    },

    /* ============== CH 3 — Images vs containers ============== */
    {
      id: 'docker-c3', title: 'Images vs containers', icon: '🧁',
      sections: [
        { type: 'heading', text: 'Recipe vs running dish', level: 1 },
        { type: 'para', html: 'An <strong>image</strong> is an immutable, layered snapshot of a filesystem plus a little metadata (default command, env vars, exposed ports). A <strong>container</strong> is a running instance of that image with a thin writable layer on top.' },
        { type: 'image', alt: 'Image layer cake with a container RW layer on top', svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2496ed">An image is a stack of read-only layers</text>
  <rect x="150" y="240" width="300" height="40" fill="#fff59d" stroke="#fbc02d" stroke-width="2"/>
  <text x="300" y="265" text-anchor="middle" font-family="sans-serif" font-size="12">container RW layer (per running container)</text>

  <rect x="150" y="200" width="300" height="40" fill="#bbdefb" stroke="#2496ed"/>
  <text x="300" y="225" text-anchor="middle" font-family="sans-serif" font-size="12">CMD ["node","server.js"]</text>
  <rect x="150" y="160" width="300" height="40" fill="#90caf9" stroke="#2496ed"/>
  <text x="300" y="185" text-anchor="middle" font-family="sans-serif" font-size="12">COPY . .</text>
  <rect x="150" y="120" width="300" height="40" fill="#64b5f6" stroke="#2496ed"/>
  <text x="300" y="145" text-anchor="middle" font-family="sans-serif" font-size="12">RUN npm ci</text>
  <rect x="150" y="80"  width="300" height="40" fill="#42a5f5" stroke="#2496ed"/>
  <text x="300" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">COPY package*.json ./</text>
  <rect x="150" y="40"  width="300" height="40" fill="#1e88e5" stroke="#2496ed"/>
  <text x="300" y="65" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">FROM node:20-alpine</text>

  <text x="465" y="65"  font-family="sans-serif" font-size="11" fill="#444">layer 1</text>
  <text x="465" y="105" font-family="sans-serif" font-size="11" fill="#444">layer 2</text>
  <text x="465" y="145" font-family="sans-serif" font-size="11" fill="#444">layer 3</text>
  <text x="465" y="185" font-family="sans-serif" font-size="11" fill="#444">layer 4</text>
  <text x="465" y="225" font-family="sans-serif" font-size="11" fill="#444">layer 5</text>
  <text x="465" y="265" font-family="sans-serif" font-size="11" fill="#bf8f00">RW top</text>
</svg>` },
        { type: 'heading', text: 'Sharing layers', level: 2 },
        { type: 'para', html: 'If 10 containers run from the same image, the image layers exist <em>once</em> on disk. Each container only has its own thin RW layer. That is why a single host can run hundreds of containers without dying.' },
        { type: 'heading', text: 'A container is ephemeral', level: 2 },
        { type: 'code', lang: 'bash', code: `$ docker run --rm ubuntu touch /tmp/notes.txt
$ docker run --rm ubuntu ls /tmp/notes.txt
<span class="com">ls: cannot access '/tmp/notes.txt': No such file or directory</span>` },
        { type: 'para', html: 'Each run is a fresh container. To survive, your data must live <em>outside</em> the container — in a volume or a bind mount. (See chapter 10.)' },
        { type: 'callout', kind: 'warn', html: 'Mental model: <strong>image is to container what class is to object</strong>. One image, many running instances.' }
      ]
    },

    /* ============== CH 4 — Working with images ============== */
    {
      id: 'docker-c4', title: 'Pulling, tagging, and pushing images', icon: '🏷️',
      sections: [
        { type: 'heading', text: 'Image references', level: 1 },
        { type: 'para', html: 'An image reference has up to four parts: <code>registry/namespace/name:tag</code>. Missing parts default to Docker Hub and tag <code>latest</code>.' },
        { type: 'code', lang: 'bash', code: `nginx                          <span class="com"># docker.io/library/nginx:latest</span>
nginx:1.27                     <span class="com"># pin a version</span>
node:20-alpine                 <span class="com"># node 20 on alpine</span>
ghcr.io/acme/api:v3.2          <span class="com"># GitHub Container Registry</span>
my-registry.io:5000/team/x:1   <span class="com"># self-hosted</span>` },
        { type: 'heading', text: 'pull, tag, push', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Get an image</span>
docker pull postgres:16

<span class="com"># Re-tag (also "rename") locally</span>
docker tag postgres:16 myreg.io/team/postgres:16

<span class="com"># Upload</span>
docker login myreg.io
docker push myreg.io/team/postgres:16` },
        { type: 'image', alt: 'Pull from registry, tag locally, push to private registry', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="20"  y="60" width="140" height="80" fill="#e3f2fd" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="90" y="95"  text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2496ed">Docker Hub</text>
  <text x="90" y="115" text-anchor="middle" font-family="sans-serif" font-size="11">postgres:16</text>

  <rect x="230" y="60" width="140" height="80" fill="#fff" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="300" y="95"  text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2496ed">Local</text>
  <text x="300" y="115" text-anchor="middle" font-family="sans-serif" font-size="11">postgres:16</text>
  <text x="300" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">+ myreg.io/team/postgres:16</text>

  <rect x="440" y="60" width="140" height="80" fill="#fff3e0" stroke="#ff9800" stroke-width="2" rx="6"/>
  <text x="510" y="95"  text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ef6c00">Private Registry</text>
  <text x="510" y="115" text-anchor="middle" font-family="sans-serif" font-size="11">myreg.io/team/postgres:16</text>

  <path d="M160 100 L228 100" stroke="#2496ed" stroke-width="2" marker-end="url(#a4)"/>
  <text x="195" y="92"  text-anchor="middle" font-family="sans-serif" font-size="11" fill="#2496ed">pull</text>
  <path d="M370 100 L438 100" stroke="#ef6c00" stroke-width="2" marker-end="url(#a4)"/>
  <text x="405" y="92"  text-anchor="middle" font-family="sans-serif" font-size="11" fill="#ef6c00">push</text>
  <defs>
    <marker id="a4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#333"/>
    </marker>
  </defs>
</svg>` },
        { type: 'heading', text: 'Listing and pruning', level: 2 },
        { type: 'code', lang: 'bash', code: `docker images                <span class="com"># local images</span>
docker images --filter dangling=true
docker rmi postgres:16       <span class="com"># remove one</span>
docker image prune           <span class="com"># dangling only</span>
docker system prune -a       <span class="com"># aggressive: unused images, containers, networks, build cache</span>` },
        { type: 'callout', kind: 'danger', html: '<code>docker system prune -a</code> can free tens of GB. It will also delete anything not in use right now — make sure stopped containers you care about are running or named first.' },
        { type: 'heading', text: 'Picking tags', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Use <code>latest</code> for exploring',
          'For CI/CD and prod, <strong>pin specific versions</strong> like <code>node:20.11.0-alpine</code>',
          'For maximum reproducibility, pin by SHA digest: <code>nginx@sha256:abc...</code>'
        ] }
      ]
    },

    /* ============== CH 5 — Dockerfile basics ============== */
    {
      id: 'docker-c5', title: 'Writing a Dockerfile', icon: '📜',
      sections: [
        { type: 'heading', text: 'A Dockerfile is a recipe', level: 1 },
        { type: 'para', html: 'Each line is one instruction. Each instruction creates a new layer.' },
        { type: 'image', alt: 'Dockerfile to image to container flow', svg: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="20"  y="40" width="160" height="100" fill="#fff" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="100" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2496ed">Dockerfile</text>
  <text x="35" y="90"  font-family="monospace" font-size="10">FROM node:20</text>
  <text x="35" y="105" font-family="monospace" font-size="10">COPY . .</text>
  <text x="35" y="120" font-family="monospace" font-size="10">CMD ["node","app"]</text>

  <path d="M180 90 L218 90" stroke="#333" stroke-width="2" marker-end="url(#a5)"/>
  <text x="200" y="80" text-anchor="middle" font-family="sans-serif" font-size="11">build</text>

  <rect x="220" y="40" width="160" height="100" fill="#e3f2fd" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="300" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2496ed">Image</text>
  <text x="300" y="95" text-anchor="middle" font-family="monospace" font-size="11">my-api:1.0</text>
  <text x="300" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">(layers + metadata)</text>

  <path d="M380 90 L418 90" stroke="#333" stroke-width="2" marker-end="url(#a5)"/>
  <text x="400" y="80" text-anchor="middle" font-family="sans-serif" font-size="11">run</text>

  <rect x="420" y="40" width="160" height="100" fill="#fff59d" stroke="#fbc02d" stroke-width="2" rx="6"/>
  <text x="500" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#bf8f00">Container</text>
  <text x="500" y="100" text-anchor="middle" font-family="sans-serif" font-size="11">running instance</text>
  <text x="500" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">PID, network, RW layer</text>
  <defs>
    <marker id="a5" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#333"/>
    </marker>
  </defs>
</svg>` },
        { type: 'heading', text: 'A complete example', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">FROM</span> node:20-alpine
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> package*.json ./
<span class="kw">RUN</span> npm ci
<span class="kw">COPY</span> . .
<span class="kw">ENV</span> NODE_ENV=production
<span class="kw">EXPOSE</span> 3000
<span class="kw">CMD</span> [<span class="str">"node"</span>, <span class="str">"server.js"</span>]` },
        { type: 'code', lang: 'bash', code: `$ docker build -t my-api:1.0 .
$ docker run -d -p 3000:3000 --name api my-api:1.0` },
        { type: 'heading', text: 'The instructions you will use most', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>FROM</code> — the base image; the foundation of all the layers above',
          '<code>WORKDIR</code> — like <code>cd</code>, but persistent for following instructions',
          '<code>COPY</code> — copy files from the build context into the image',
          '<code>ADD</code> — like COPY, but also auto-extracts tars and fetches URLs (prefer COPY)',
          '<code>RUN</code> — execute a command at BUILD time',
          '<code>ENV</code> — set an environment variable',
          '<code>EXPOSE</code> — document a port (does not publish)',
          '<code>CMD</code> — default command at RUN time',
          '<code>ENTRYPOINT</code> — fixed executable; args from <code>docker run</code>'
        ] },
        { type: 'heading', text: 'CMD vs ENTRYPOINT', level: 2 },
        { type: 'para', html: 'Two confusing siblings. The rule: <strong>ENTRYPOINT is your "main"; CMD is the default arguments.</strong>' },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">ENTRYPOINT</span> [<span class="str">"echo"</span>]
<span class="kw">CMD</span> [<span class="str">"hello"</span>]

<span class="com"># docker run img            -> echo hello</span>
<span class="com"># docker run img world      -> echo world  (CMD replaced, ENTRYPOINT stays)</span>
<span class="com"># docker run --entrypoint sh img  -> sh    (override entrypoint explicitly)</span>` },
        { type: 'callout', kind: 'tip', html: 'Use the <strong>exec form</strong>: <code>CMD ["node","server.js"]</code> not <code>CMD node server.js</code>. The shell form wraps everything in <code>/bin/sh -c</code> which mishandles signals like SIGTERM.' }
      ]
    },

    /* ============== CH 6 — Multi-stage builds ============== */
    {
      id: 'docker-c6', title: 'Multi-stage builds', icon: '🏗️',
      sections: [
        { type: 'heading', text: 'Compile big, ship small', level: 1 },
        { type: 'para', html: 'You typically need a fat base to compile (compilers, headers, dev libraries) but a slim one to run. Multi-stage builds let you do both in one Dockerfile and only the last stage becomes the image.' },
        { type: 'image', alt: 'Single-stage vs multi-stage size comparison', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <text x="150" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c62828">Single-stage</text>
  <rect x="60" y="40" width="180" height="40" fill="#ffcdd2" stroke="#c62828"/>
  <text x="150" y="65" text-anchor="middle" font-family="sans-serif" font-size="12">source</text>
  <rect x="60" y="80" width="180" height="40" fill="#ef9a9a" stroke="#c62828"/>
  <text x="150" y="105" text-anchor="middle" font-family="sans-serif" font-size="12">compiler + libs</text>
  <rect x="60" y="120" width="180" height="40" fill="#e57373" stroke="#c62828"/>
  <text x="150" y="145" text-anchor="middle" font-family="sans-serif" font-size="12">compiled artifact</text>
  <rect x="60" y="160" width="180" height="40" fill="#ef5350" stroke="#c62828"/>
  <text x="150" y="185" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">~ 900 MB image</text>

  <text x="450" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2e7d32">Multi-stage</text>
  <rect x="360" y="40" width="180" height="80" fill="#c8e6c9" stroke="#2e7d32" stroke-dasharray="4 3"/>
  <text x="450" y="75" text-anchor="middle" font-family="sans-serif" font-size="12">stage 1: build</text>
  <text x="450" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#555">(thrown away)</text>

  <rect x="360" y="160" width="180" height="40" fill="#66bb6a" stroke="#2e7d32"/>
  <text x="450" y="185" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">~ 15 MB image</text>
  <path d="M450 120 L450 158" stroke="#2e7d32" stroke-width="2" marker-end="url(#a6)"/>
  <text x="475" y="142" font-family="sans-serif" font-size="10" fill="#2e7d32">COPY --from=build</text>
  <defs>
    <marker id="a6" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2e7d32"/>
    </marker>
  </defs>
</svg>` },
        { type: 'heading', text: 'A Go service example', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># ---- stage 1: build ----</span>
<span class="kw">FROM</span> golang:1.22 <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> /src
<span class="kw">COPY</span> go.mod go.sum ./
<span class="kw">RUN</span> go mod download
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> CGO_ENABLED=0 go build -o /out/app ./cmd/api

<span class="com"># ---- stage 2: runtime ----</span>
<span class="kw">FROM</span> gcr.io/distroless/static
<span class="kw">COPY</span> --from=build /out/app /app
<span class="kw">EXPOSE</span> 8080
<span class="kw">ENTRYPOINT</span> [<span class="str">"/app"</span>]` },
        { type: 'para', html: 'The final image has <em>no shell, no package manager, no compiler</em>. Just your binary and the bare minimum to run it. Tiny and a tiny attack surface.' },
        { type: 'heading', text: 'A Node/React example', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">FROM</span> node:20-alpine <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> package*.json ./
<span class="kw">RUN</span> npm ci
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> npm run build

<span class="kw">FROM</span> nginx:alpine
<span class="kw">COPY</span> --from=build /app/dist /usr/share/nginx/html
<span class="kw">EXPOSE</span> 80` },
        { type: 'callout', kind: 'tip', html: 'You can name as many stages as you want — <code>AS test</code>, <code>AS lint</code>, etc. — and target a specific one with <code>docker build --target test</code>.' }
      ]
    },

    /* ============== CH 7 — Layers & caching ============== */
    {
      id: 'docker-c7', title: 'Layers, caching, and .dockerignore', icon: '⚡',
      sections: [
        { type: 'heading', text: 'How the cache works', level: 1 },
        { type: 'para', html: 'For each instruction, Docker computes a cache key from the instruction text plus its inputs. If a matching layer exists, it is reused — instantly. If not, the layer is rebuilt and <strong>every subsequent layer is also rebuilt</strong>.' },
        { type: 'heading', text: 'Order matters', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># BAD — any source change invalidates npm install</span>
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> npm ci

<span class="com"># GOOD — npm ci only re-runs when package*.json changes</span>
<span class="kw">COPY</span> package*.json ./
<span class="kw">RUN</span> npm ci
<span class="kw">COPY</span> . .` },
        { type: 'para', html: 'The good version takes a 30-second build down to ~1 second for typical source-only edits.' },
        { type: 'heading', text: '.dockerignore', level: 2 },
        { type: 'para', html: 'The <em>build context</em> is everything Docker uploads to the daemon before building. Without a <code>.dockerignore</code>, you might be uploading 500 MB of <code>node_modules</code> every build.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># .dockerignore</span>
node_modules
.git
.env*
*.log
dist
coverage
.vscode
.DS_Store` },
        { type: 'callout', kind: 'warn', html: 'A missing <code>.dockerignore</code> can leak secrets. <code>.env</code>, <code>.aws/</code>, and SSH keys love to ride along into the image if you do not exclude them.' },
        { type: 'heading', text: 'Combine RUN instructions thoughtfully', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># Two layers, including an apt cache layer that adds size</span>
<span class="kw">RUN</span> apt-get update
<span class="kw">RUN</span> apt-get install -y curl

<span class="com"># One layer, cleaned up — smaller image</span>
<span class="kw">RUN</span> apt-get update && \\
    apt-get install -y --no-install-recommends curl && \\
    rm -rf /var/lib/apt/lists/*` },
        { type: 'list', kind: 'check', items: [
          'Order from least-changing to most-changing',
          'Copy lockfiles before source',
          'Chain related commands in one RUN with cleanup',
          'Use <code>--no-install-recommends</code> on Debian/Ubuntu',
          'Add <code>.dockerignore</code> from day one'
        ] }
      ]
    },

    /* ============== CH 8 — Lifecycle ============== */
    {
      id: 'docker-c8', title: 'Container lifecycle', icon: '♻️',
      sections: [
        { type: 'heading', text: 'States and transitions', level: 1 },
        { type: 'image', alt: 'Container state diagram: created, running, paused, exited, removed', svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80"  cy="120" rx="70" ry="30" fill="#e3f2fd" stroke="#2496ed" stroke-width="2"/>
  <text x="80"  y="125" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">created</text>

  <ellipse cx="260" cy="120" rx="70" ry="30" fill="#c8e6c9" stroke="#2e7d32" stroke-width="2"/>
  <text x="260" y="125" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">running</text>

  <ellipse cx="260" cy="40"  rx="70" ry="22" fill="#fff3e0" stroke="#ef6c00" stroke-width="2"/>
  <text x="260" y="45"  text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">paused</text>

  <ellipse cx="440" cy="120" rx="70" ry="30" fill="#ffe0b2" stroke="#ef6c00" stroke-width="2"/>
  <text x="440" y="125" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">exited</text>

  <ellipse cx="440" cy="210" rx="70" ry="22" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text x="440" y="215" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">removed</text>

  <path d="M150 120 L188 120" stroke="#333" stroke-width="2" marker-end="url(#a8)"/>
  <text x="170" y="112" text-anchor="middle" font-family="sans-serif" font-size="10">start</text>

  <path d="M330 120 L368 120" stroke="#333" stroke-width="2" marker-end="url(#a8)"/>
  <text x="350" y="112" text-anchor="middle" font-family="sans-serif" font-size="10">stop</text>

  <path d="M368 132 C330 142 290 142 232 132" stroke="#333" stroke-width="2" fill="none" marker-end="url(#a8)"/>
  <text x="320" y="158" text-anchor="middle" font-family="sans-serif" font-size="10">start</text>

  <path d="M260 90 L260 65" stroke="#333" stroke-width="2" marker-end="url(#a8)"/>
  <text x="280" y="78" font-family="sans-serif" font-size="10">pause</text>
  <path d="M280 65 L280 90" stroke="#333" stroke-width="2" marker-end="url(#a8)"/>
  <text x="305" y="78" font-family="sans-serif" font-size="10">unpause</text>

  <path d="M440 150 L440 188" stroke="#333" stroke-width="2" marker-end="url(#a8)"/>
  <text x="460" y="172" font-family="sans-serif" font-size="10">rm</text>
  <defs>
    <marker id="a8" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#333"/>
    </marker>
  </defs>
</svg>` },
        { type: 'heading', text: 'The commands', level: 2 },
        { type: 'code', lang: 'bash', code: `docker ps                 <span class="com"># list running</span>
docker ps -a              <span class="com"># list all (any state)</span>
docker run -d --name web nginx
docker stop web           <span class="com"># SIGTERM, then SIGKILL after 10s</span>
docker start web          <span class="com"># resume a stopped container</span>
docker restart web
docker pause web && docker unpause web
docker kill web           <span class="com"># SIGKILL immediately</span>
docker rm web             <span class="com"># delete (must be stopped, or use -f)</span>` },
        { type: 'heading', text: 'Exec into a running container', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Open a shell inside a running container</span>
docker exec -it web sh

<span class="com"># Run a one-shot command</span>
docker exec web ls /etc/nginx</code>` },
        { type: 'callout', kind: 'info', html: '<code>docker exec</code> joins an existing container. <code>docker run</code> creates a new one. Easy to confuse early on.' },
        { type: 'heading', text: 'Restart policies', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>--restart no</code> (default) — do nothing',
          '<code>--restart on-failure</code> — restart on non-zero exit',
          '<code>--restart unless-stopped</code> — always restart unless you stopped it',
          '<code>--restart always</code> — even after a manual stop, restart on daemon boot'
        ] }
      ]
    },

    /* ============== CH 9 — Networking ============== */
    {
      id: 'docker-c9', title: 'Ports and networking', icon: '🌐',
      sections: [
        { type: 'heading', text: 'Publishing a port', level: 1 },
        { type: 'para', html: 'Containers are network-isolated by default. To reach your app from the host browser, you have to publish a port.' },
        { type: 'code', lang: 'bash', code: `docker run -d -p 8080:80 nginx
<span class="com">#                ▲   ▲</span>
<span class="com">#                |   container port (where nginx listens)</span>
<span class="com">#                host port (browser visits)</span>

curl http://localhost:8080` },
        { type: 'heading', text: 'The default bridge', level: 2 },
        { type: 'image', alt: 'Docker bridge network topology with two containers', svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="560" height="220" fill="#fafafa" stroke="#999" rx="8"/>
  <text x="40" y="40" font-family="sans-serif" font-size="13" font-weight="bold" fill="#555">Host (Linux)</text>

  <rect x="240" y="100" width="120" height="40" fill="#bbdefb" stroke="#2496ed" stroke-width="2" rx="4"/>
  <text x="300" y="125" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">docker0 bridge</text>

  <rect x="60" y="180" width="140" height="40" fill="#e3f2fd" stroke="#2496ed"/>
  <text x="130" y="205" text-anchor="middle" font-family="sans-serif" font-size="11">container A · 172.17.0.2</text>

  <rect x="400" y="180" width="140" height="40" fill="#e3f2fd" stroke="#2496ed"/>
  <text x="470" y="205" text-anchor="middle" font-family="sans-serif" font-size="11">container B · 172.17.0.3</text>

  <line x1="130" y1="180" x2="280" y2="140" stroke="#2496ed" stroke-width="2"/>
  <line x1="470" y1="180" x2="320" y2="140" stroke="#2496ed" stroke-width="2"/>

  <rect x="60" y="60" width="140" height="30" fill="#fff3e0" stroke="#ef6c00"/>
  <text x="130" y="80" text-anchor="middle" font-family="sans-serif" font-size="11">host eth0 (LAN)</text>
  <line x1="130" y1="90" x2="280" y2="105" stroke="#ef6c00" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="220" y="100" font-family="sans-serif" font-size="10" fill="#ef6c00">NAT (-p)</text>
</svg>` },
        { type: 'heading', text: 'User-defined networks', level: 2 },
        { type: 'para', html: 'For real apps with multiple containers, create your own bridge network. Two big wins: <strong>container-name DNS</strong> and <strong>isolation</strong> from unrelated containers.' },
        { type: 'code', lang: 'bash', code: `docker network create app-net

docker run -d --name db    --network app-net -e POSTGRES_PASSWORD=pw postgres:16
docker run -d --name api   --network app-net -p 3000:3000 my-api

<span class="com"># Inside the api container, "db" resolves to the postgres container</span>
docker exec api nslookup db</code>` },
        { type: 'heading', text: 'Network drivers', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>bridge</code> — default, NATed, isolated. Use a user-defined one for prod.',
          '<code>host</code> — share the host network stack. No -p needed, no isolation. Linux only.',
          '<code>none</code> — completely isolated. For batch jobs that need no network.',
          '<code>overlay</code> — multi-host networking (Swarm / Kubernetes)',
          '<code>macvlan</code> — give a container its own MAC address on the LAN'
        ] },
        { type: 'callout', kind: 'tip', html: 'Beginner gotcha: the <em>default</em> bridge (named "bridge") does NOT do DNS resolution by container name. <strong>User-defined</strong> bridges do. Always create your own.' },
        { type: 'heading', text: 'Inspecting a network', level: 2 },
        { type: 'code', lang: 'bash', code: `docker network ls
docker network inspect app-net
docker network rm app-net` }
      ]
    },

    /* ============== CH 10 — Volumes ============== */
    {
      id: 'docker-c10', title: 'Volumes and bind mounts', icon: '💾',
      sections: [
        { type: 'heading', text: 'Containers are ephemeral', level: 1 },
        { type: 'para', html: 'When you <code>docker rm</code>, the writable layer goes with it. For anything you want to keep — database files, uploads, ML model weights — store outside the container.' },
        { type: 'image', alt: 'Volume types comparison: named volume, bind mount, tmpfs', svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="40" width="180" height="180" fill="#fff" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="110" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2496ed">Named volume</text>
  <text x="110" y="105" text-anchor="middle" font-family="sans-serif" font-size="11">Docker manages</text>
  <text x="110" y="125" text-anchor="middle" font-family="sans-serif" font-size="11">/var/lib/docker/volumes</text>
  <text x="110" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">best for: DB data</text>
  <text x="110" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">survives docker rm</text>

  <rect x="210" y="40" width="180" height="180" fill="#fff" stroke="#ef6c00" stroke-width="2" rx="6"/>
  <text x="300" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ef6c00">Bind mount</text>
  <text x="300" y="105" text-anchor="middle" font-family="sans-serif" font-size="11">Specific host path</text>
  <text x="300" y="125" text-anchor="middle" font-family="sans-serif" font-size="11">$PWD : /app</text>
  <text x="300" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">best for: dev source</text>
  <text x="300" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">edits visible live</text>

  <rect x="400" y="40" width="180" height="180" fill="#fff" stroke="#c62828" stroke-width="2" rx="6"/>
  <text x="490" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c62828">tmpfs</text>
  <text x="490" y="105" text-anchor="middle" font-family="sans-serif" font-size="11">In-memory only</text>
  <text x="490" y="125" text-anchor="middle" font-family="sans-serif" font-size="11">never hits disk</text>
  <text x="490" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">best for: secrets, scratch</text>
  <text x="490" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">gone when container stops</text>
</svg>` },
        { type: 'heading', text: 'Named volumes', level: 2 },
        { type: 'code', lang: 'bash', code: `docker volume create pgdata
docker run -d --name pg \\
  -v pgdata:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=secret \\
  postgres:16

docker volume ls
docker volume inspect pgdata
docker volume rm pgdata        <span class="com"># only when no container uses it</span>` },
        { type: 'heading', text: 'Bind mounts (dev workflow)', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Live-reload Node app: edit on host, see it inside container</span>
docker run --rm -it \\
  -v <span class="str">"$PWD"</span>:/app \\
  -w /app \\
  -p 3000:3000 \\
  node:20 npm run dev` },
        { type: 'callout', kind: 'warn', html: 'Bind mounts are <em>not portable</em>. The host path must exist exactly where the command runs. Great for dev, brittle for prod.' },
        { type: 'heading', text: 'Read-only mounts', level: 2 },
        { type: 'code', lang: 'bash', code: `docker run -v config:/etc/app:ro myimg
<span class="com">#                       ▲ read-only</span>` },
        { type: 'heading', text: 'Backups', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Tar the volume's contents from a helper container</span>
docker run --rm -v pgdata:/data -v <span class="str">"$PWD"</span>:/backup alpine \\
  tar czf /backup/pgdata-<span class="str">$(date +%F)</span>.tar.gz -C /data .</code>` }
      ]
    },

    /* ============== CH 11 — Env & secrets ============== */
    {
      id: 'docker-c11', title: 'Environment variables and secrets', icon: '🔐',
      sections: [
        { type: 'heading', text: 'Config goes in the environment', level: 1 },
        { type: 'para', html: 'Twelve-factor apps read config from environment variables. Docker has several ways to set them.' },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># Dockerfile — defaults baked into the image</span>
<span class="kw">ENV</span> NODE_ENV=production
<span class="kw">ENV</span> LOG_LEVEL=info` },
        { type: 'code', lang: 'bash', code: `<span class="com"># docker run — override or add</span>
docker run -e DB_URL=postgres://db -e API_KEY=xyz my-api

<span class="com"># Or batch them in a file</span>
$ cat .env.prod
DB_URL=postgres://db
API_KEY=xyz

docker run --env-file .env.prod my-api` },
        { type: 'heading', text: 'ARG vs ENV', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>ARG</code> — available only at BUILD time (e.g., versions to pin)',
          '<code>ENV</code> — available at BUILD and RUN time'
        ] },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">ARG</span> NODE_VERSION=20
<span class="kw">FROM</span> node:\${NODE_VERSION}-alpine
<span class="kw">ENV</span> APP_HOME=/app
<span class="kw">WORKDIR</span> \${APP_HOME}` },
        { type: 'callout', kind: 'danger', html: 'Do not put secrets in ARG or ENV in your Dockerfile. They become part of the image and are visible to anyone who pulls it. Even <code>RUN echo $SECRET</code> leaves traces in the layer history.' },
        { type: 'heading', text: 'BuildKit secrets', level: 2 },
        { type: 'para', html: 'Modern Docker (BuildKit) supports build-time secrets that are NOT baked into the final image.' },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># Dockerfile</span>
<span class="com"># syntax=docker/dockerfile:1.7</span>
<span class="kw">RUN</span> --mount=type=secret,id=npmrc,target=/root/.npmrc \\
    npm ci` },
        { type: 'code', lang: 'bash', code: `docker build --secret id=npmrc,src=\$HOME/.npmrc -t my-api .` },
        { type: 'heading', text: 'Runtime secrets', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Mount a secret from disk: <code>-v /run/secrets/db:/run/secrets/db:ro</code>',
          'Use Docker Swarm secrets (mounted as files in <code>/run/secrets/</code>)',
          'In Kubernetes, use Secret objects',
          'Outside the box: HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager'
        ] }
      ]
    },

    /* ============== CH 12 — Logs & health ============== */
    {
      id: 'docker-c12', title: 'Logs, monitoring, and healthchecks', icon: '📈',
      sections: [
        { type: 'heading', text: 'stdout is the log stream', level: 1 },
        { type: 'para', html: 'Containerized apps should write logs to stdout/stderr. Docker captures the streams and exposes them via <code>docker logs</code>. Configurable <em>log drivers</em> can ship them anywhere.' },
        { type: 'code', lang: 'bash', code: `docker logs my-api                <span class="com"># dump</span>
docker logs -f my-api             <span class="com"># follow</span>
docker logs --tail 100 my-api     <span class="com"># last 100 lines</span>
docker logs --since 10m my-api    <span class="com"># last 10 minutes</span>
docker logs -t my-api             <span class="com"># add timestamps</span>` },
        { type: 'heading', text: 'Log drivers', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>json-file</code> — default; on-disk JSON',
          '<code>local</code> — newer compressed format',
          '<code>journald</code> — systemd journal',
          '<code>syslog</code> — remote syslog server',
          '<code>fluentd</code>, <code>gelf</code>, <code>awslogs</code>, <code>gcplogs</code> — ship to log aggregators'
        ] },
        { type: 'code', lang: 'bash', code: `<span class="com"># Set driver and a max size on rotation</span>
docker run -d \\
  --log-driver json-file \\
  --log-opt max-size=10m \\
  --log-opt max-file=3 \\
  my-api` },
        { type: 'callout', kind: 'warn', html: 'Without log rotation, a chatty container can fill your host disk. Set <code>max-size</code> and <code>max-file</code> in production.' },
        { type: 'heading', text: 'HEALTHCHECK', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">HEALTHCHECK</span> --interval=30s --timeout=3s --start-period=15s --retries=3 \\
  CMD curl -fsS http://localhost:3000/health || exit 1` },
        { type: 'para', html: 'Possible states: <code>starting</code>, <code>healthy</code>, <code>unhealthy</code>. Orchestrators like Compose, Swarm, and Kubernetes use this to gate traffic.' },
        { type: 'code', lang: 'bash', code: `docker ps           <span class="com"># shows (healthy) / (unhealthy) next to status</span>
docker inspect --format <span class="str">'{{.State.Health.Status}}'</span> my-api</code>` },
        { type: 'heading', text: 'Stats', level: 2 },
        { type: 'code', lang: 'bash', code: `docker stats           <span class="com"># live CPU, memory, net, block I/O</span>
docker top my-api      <span class="com"># processes in the container</span>
docker inspect my-api  <span class="com"># everything Docker knows about it</span>` }
      ]
    },

    /* ============== CH 13 — Compose ============== */
    {
      id: 'docker-c13', title: 'Docker Compose', icon: '🎼',
      sections: [
        { type: 'heading', text: 'Multi-container apps as one file', level: 1 },
        { type: 'para', html: 'Real apps are rarely a single container. Web + database + cache + worker + message broker — Compose describes the whole stack in YAML and starts it with one command.' },
        { type: 'image', alt: 'Compose stack with web, api, db, redis on a shared network', svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="30" width="560" height="200" fill="#fafafa" stroke="#999" rx="8"/>
  <text x="40" y="50" font-family="sans-serif" font-size="13" font-weight="bold" fill="#555">Compose project network</text>

  <rect x="60"  y="80"  width="120" height="60" fill="#e3f2fd" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="120" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold">web</text>
  <text x="120" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">nginx :80</text>

  <rect x="240" y="80"  width="120" height="60" fill="#e3f2fd" stroke="#2496ed" stroke-width="2" rx="6"/>
  <text x="300" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold">api</text>
  <text x="300" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">node :3000</text>

  <rect x="420" y="80"  width="120" height="60" fill="#fff3e0" stroke="#ef6c00" stroke-width="2" rx="6"/>
  <text x="480" y="110" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold">redis</text>
  <text x="480" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">cache :6379</text>

  <rect x="240" y="170" width="120" height="50" fill="#fce4ec" stroke="#c62828" stroke-width="2" rx="6"/>
  <text x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold">db</text>
  <text x="300" y="215" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#666">postgres :5432</text>

  <line x1="180" y1="110" x2="240" y2="110" stroke="#999"/>
  <line x1="360" y1="110" x2="420" y2="110" stroke="#999"/>
  <line x1="300" y1="140" x2="300" y2="170" stroke="#999"/>
</svg>` },
        { type: 'heading', text: 'docker-compose.yml', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">services</span>:
  <span class="ty">web</span>:
    image: nginx
    ports: [<span class="str">"8080:80"</span>]
    depends_on: [api]

  <span class="ty">api</span>:
    build: ./api
    environment:
      DB_URL: postgres://db:5432/app
      REDIS_URL: redis://redis:6379
    depends_on:
      db: { condition: service_healthy }
      redis: { condition: service_started }

  <span class="ty">db</span>:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes: [pgdata:/var/lib/postgresql/data]
    healthcheck:
      test: [<span class="str">"CMD"</span>, <span class="str">"pg_isready"</span>, <span class="str">"-U"</span>, <span class="str">"postgres"</span>]
      interval: 5s

  <span class="ty">redis</span>:
    image: redis:7-alpine

<span class="kw">volumes</span>:
  pgdata:</code>` },
        { type: 'heading', text: 'The command cheat sheet', level: 2 },
        { type: 'code', lang: 'bash', code: `docker compose up -d              <span class="com"># start everything in background</span>
docker compose ps                 <span class="com"># list services</span>
docker compose logs -f api        <span class="com"># follow one service</span>
docker compose exec api sh        <span class="com"># shell into a service</span>
docker compose build api          <span class="com"># rebuild a service</span>
docker compose down               <span class="com"># stop + remove containers + network</span>
docker compose down -v            <span class="com"># also delete named volumes</span></code>` },
        { type: 'heading', text: 'How services talk', level: 2 },
        { type: 'para', html: 'Compose creates a default network for the project. Services reach each other by their service name as hostname: <code>api</code> connects to <code>db</code>:<code>5432</code>.' },
        { type: 'callout', kind: 'tip', html: 'Use <code>profiles:</code> to make optional services that only start when explicitly requested — e.g., a "debug" profile with extra tooling.' },
        { type: 'heading', text: 'depends_on is not "wait for ready"', level: 2 },
        { type: 'para', html: 'By default <code>depends_on</code> only orders <em>startup</em>. For "wait until ready," combine it with a <code>healthcheck</code> and <code>condition: service_healthy</code> (see the db example above).' }
      ]
    },

    /* ============== CH 14 — Best practices & security ============== */
    {
      id: 'docker-c14', title: 'Best practices and security', icon: '🛡️',
      sections: [
        { type: 'heading', text: 'A short, opinionated checklist', level: 1 },
        { type: 'list', kind: 'check', items: [
          'Pin base images by version (and ideally digest)',
          'Use a minimal base (<code>alpine</code>, <code>distroless</code>) when possible',
          'Drop root with <code>USER</code>',
          'Use multi-stage builds — never ship compilers',
          '<code>.dockerignore</code> from day one',
          'Order Dockerfile lines for cache hits',
          'No secrets in <code>ENV</code> / <code>ARG</code>',
          'Add a <code>HEALTHCHECK</code>',
          'Scan images regularly (<code>docker scout</code>, Trivy, Grype)',
          'Limit resources: <code>--memory</code>, <code>--cpus</code>',
          'Read-only filesystem where you can: <code>--read-only</code>',
          'Drop Linux capabilities to the minimum needed'
        ] },
        { type: 'heading', text: 'Don\'t run as root', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">FROM</span> node:20.11.0-alpine
<span class="kw">RUN</span> addgroup -S app && adduser -S app -G app
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> --chown=app:app . .
<span class="kw">USER</span> app
<span class="kw">CMD</span> [<span class="str">"node"</span>, <span class="str">"server.js"</span>]` },
        { type: 'heading', text: 'Scan for vulnerabilities', level: 2 },
        { type: 'code', lang: 'bash', code: `docker scout quickview my-api:1.0
docker scout cves     my-api:1.0

<span class="com"># Or with Trivy</span>
trivy image my-api:1.0` },
        { type: 'heading', text: 'Resource limits', level: 2 },
        { type: 'code', lang: 'bash', code: `docker run -d \\
  --memory 512m \\
  --memory-swap 512m \\
  --cpus 1.5 \\
  --pids-limit 200 \\
  my-api` },
        { type: 'heading', text: 'Capabilities and read-only root', level: 2 },
        { type: 'code', lang: 'bash', code: `docker run -d \\
  --read-only \\
  --cap-drop ALL \\
  --cap-add NET_BIND_SERVICE \\
  --tmpfs /tmp \\
  my-api</code>` },
        { type: 'callout', kind: 'danger', html: 'Beware <code>--privileged</code>. It disables almost all isolation — it should be <em>extremely</em> rare in production.' },
        { type: 'heading', text: 'What good looks like', level: 2 },
        { type: 'para', html: 'A production image is small (often &lt; 100 MB), pinned, scanned, non-root, has a healthcheck, drops capabilities, mounts a read-only root, and gets its secrets injected at run time. Nothing fancy — just consistently boring.' },
        { type: 'callout', kind: 'success', html: 'You can ship Docker today. The same patterns extend to Compose stacks and, when you outgrow them, to orchestrators like Kubernetes.' }
      ]
    }

  ]
});
