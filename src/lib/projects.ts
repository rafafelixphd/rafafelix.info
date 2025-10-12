import { Project } from '@/models/types';

// Load projects from individual JSON files
let projects: Project[] = [];

// Function to load projects data
async function loadProjects(): Promise<Project[]> {
  if (projects.length === 0) {
    try {
      // List of project IDs to load
      const projectIds = [
        'age-across-multiple-frames',
        'synthetic-face-augmentation',
        'global-data-collection-compliance',
        'out-of-home-attention-detection',
        'cross-device-gaze-detection',
        'poc-gaze-dataset-collection'
      ];

      // Load each project file
      const projectPromises = projectIds.map(async (id) => {
        try {
          const response = await fetch(`/data/projects/${id}.json`);
          if (!response.ok) {
            console.warn(`Failed to load project ${id}:`, response.statusText);
            return null;
          }
          return await response.json();
        } catch (error) {
          console.warn(`Error loading project ${id}:`, error);
          return null;
        }
      });

      const loadedProjects = await Promise.all(projectPromises);
      projects = loadedProjects.filter((project): project is Project => project !== null);
    } catch (error) {
      console.error('Error loading projects:', error);
      // Fallback to empty array if loading fails
      projects = [];
    }
  }
  return projects;
}

// Function to load a single project by ID
async function loadProject(id: string): Promise<Project | null> {
  try {
    const response = await fetch(`/data/projects/${id}.json`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}

// Export the loader functions and a synchronous getter for compatibility
export { loadProjects, loadProject };

// For backward compatibility, export projects as a getter
export const getProjects = (): Project[] => projects;

// Initialize projects on module load (for SSR compatibility)
if (typeof window === 'undefined') {
  // Server-side: load synchronously
  const fs = require('fs');
  const path = require('path');
  try {
    const projectsDir = path.join(process.cwd(), 'public', 'data', 'projects');
    const projectIds = [
      'age-across-multiple-frames',
      'synthetic-face-augmentation',
      'global-data-collection-compliance',
      'out-of-home-attention-detection',
      'cross-device-gaze-detection',
      'poc-gaze-dataset-collection'
    ];

    projects = projectIds.map(id => {
      try {
        const filePath = path.join(projectsDir, `${id}.json`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      } catch (error) {
        console.warn(`Error loading project ${id} on server:`, error);
        return null;
      }
    }).filter((project): project is Project => project !== null);
    
    console.log(`Loaded ${projects.length} projects on server-side`);
  } catch (error) {
    console.error('Error loading projects on server:', error);
    projects = [];
  }
}