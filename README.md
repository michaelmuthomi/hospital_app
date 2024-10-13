# 1. Frontend Setup (React Native with Expo)

### Prerequisites:
- Node.js installed
- Expo CLI installed globally (npm install -g expo-cli)

## Steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/MediLink.git
```
```bash
cd MediLink/src
```

### 2. Install dependencies:

```bash
npm install
```
### 3. Set up environment variables
Create a ```.env``` file in the root directory and add the following variables:
``` bash
EXPO_DEPLOYMENT-URL=<your_expo_deployment_ur>
EXPO_SUPABASE_URL=<your_supabase_url>
EXPO_SUPABASE_ANON_KEY=<your_supabase_anon_key>
```
### 4. Run the project:

```bash
expo start
```

 Use the QR code to run the app on a physical device via the Expo Go app or on an emulator.


# 2. Backend Setup (FastAPI)

### Prerequisites:
 - Python 3.x installed
 - Pip package manager
 - Vercel CLI installed globally 
 ``` javascript
 npm install -g vercel
 ```

## Steps:

### 1. Navigate to the backend folder:

```bash
cd ../api
```

### 2. Install backend dependencies:

```bash
pip install -r requirements.txt
```

### 3. Deploy to Vercel:

First, log in to Vercel (if not done yet):
```bash
vercel login
```
Then deploy:
```bash
vercel --prod
```

### API Integration
Make sure to update the API base URL in the frontend (likely in .env) to point to your Vercel-deployed FastAPI endpoint.