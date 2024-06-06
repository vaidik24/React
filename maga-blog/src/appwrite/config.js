import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    const post = await this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId,
      }
    );
    return post;
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    const post = await this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
      }
    );
    return post;
  }

  async deletePost(slug) {
    const post = await this.databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
    if (post) {
      return true;
    } else {
      false;
    }
  }

  async getPost(slug) {
    const post = await this.databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
    return post;
  }

  async getPosts({ queries = [Query.equal("status", "active")] }) {
    const posts = await this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries
    );
    return posts;
  }

  async uploadFile(file) {
    const uploadedFile = await this.storage.createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
    );
    return uploadedFile;
  }

  async deleteFile(fileId) {
    const deletedFile = await this.storage.deleteFile(
      conf.appwriteBucketId,
      fileId
    );
    return deletedFile;
  }

  getFilePriview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
