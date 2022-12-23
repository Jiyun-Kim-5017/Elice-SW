import { LikeModel } from "../models";

class LikeService {
  private likeModel = new LikeModel();

  async getPostIds(email: string) {
    const likes = await this.likeModel.findByEmail(email);
    return likes;
  }
  async create(likeInfo: object) {
    await this.likeModel.create(likeInfo);
  }
  async delete(likeInfo: object) {
    await this.likeModel.deleteOne(likeInfo);
  }
  async isLiked(posts: [], email: string) {
    const postsWithLike = [];
    for (const { postId, title, region, thumbnail } of posts) {
      const like = await this.likeModel.findOne({ email, postId });
      postsWithLike.push({
        postId,
        title,
        region,
        thumbnail,
        like: like ? true : false,
      });
    }
    return postsWithLike;
  }
}

const likeService = new LikeService();

export default likeService;
