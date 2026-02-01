import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Get the API key from environment variables if available
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create axios instance with default config
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    ...(API_KEY && { 'Authorization': `token ${API_KEY}` })
  }
});

/**
 * Fetch user data from GitHub API
 * @param {string} username - The GitHub username to search for
 * @returns {Promise} - Promise with user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.username - Username to search for
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum number of repositories
 * @param {number} searchParams.page - Page number for pagination (default: 1)
 * @param {number} searchParams.perPage - Results per page (default: 10)
 * @returns {Promise} - Promise with search results
 */
export const searchUsers = async ({ username, location, minRepos, page = 1, perPage = 10 }) => {
  try {
    // Build the query string
    let query = username ? username : '';
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    const response = await githubAPI.get('/search/users', {
      params: {
        q: query,
        page,
        per_page: perPage
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific user
 * @param {string} username - The username to get details for
 * @returns {Promise} - Promise with user details
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default githubAPI;
