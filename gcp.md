
### 1) Auth Docker to GCP

```bash
gcloud auth login
gcloud config set project <PROJECT_ID>
gcloud auth configure-docker <REGION>-docker.pkg.dev
```

### 2) Build

```bash
docker build -t my-app:latest .
```

### 3) Tag for Artifact Registry

Format:
`<REGION>-docker.pkg.dev/<PROJECT_ID>/<REPO>/<IMAGE>:<TAG>`

```bash
docker tag my-app:latest <REGION>-docker.pkg.dev/<PROJECT_ID>/<REPO>/my-app:latest
```

### 4) Push

```bash
docker push <REGION>-docker.pkg.dev/<PROJECT_ID>/<REPO>/my-app:latest
```

### 5) Deploy to Cloud Run (common)

```bash
gcloud run deploy my-app \
  --image <REGION>-docker.pkg.dev/<PROJECT_ID>/<REPO>/my-app:latest \
  --region <REGION> \
  --platform managed \
  --allow-unauthenticated
```

Tip (for your React pinning concern): in your Dockerfile use `npm ci` (not `npm install`) so the lockfile is enforced.
